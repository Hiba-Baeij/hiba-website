"use client"

import React from 'react'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarsField() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const particleSystemRef = useRef<THREE.Points>();

    useEffect(() => {
        if (!sceneRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer; // Store renderer reference to dispose it later
        sceneRef.current.appendChild(renderer.domElement);

        const particleGeometry = new THREE.BufferGeometry();
        const positions = [];
        const velocities = [];
        const numStars = 10000;
        const radius = 500; // Radius of the circular motion
        for (let i = 0; i < numStars; i++) {
            const angle = Math.random() * Math.PI * 2;
            positions.push(Math.cos(angle) * radius, Math.sin(angle) * radius, Math.random() * 2000 - 1000);
            velocities.push((Math.random() - 0.5) * 0.001, (Math.random() - 0.5) * 0.001);
        }
        particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        particleGeometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 2));

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2
        });

        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);
        particleSystemRef.current = particleSystem;

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            const positionsAttribute = particleGeometry.getAttribute('position') as THREE.BufferAttribute;
            const velocitiesAttribute = particleGeometry.getAttribute('velocity') as THREE.BufferAttribute;
            const positionsArray = positionsAttribute.array as Float32Array;
            const velocitiesArray = velocitiesAttribute.array as Float32Array;

            for (let i = 0; i < numStars * 3; i += 3) {
                const angle = Math.atan2(positionsArray[i + 1], positionsArray[i]);
                const distance = Math.sqrt(positionsArray[i] ** 2 + positionsArray[i + 1] ** 2);
                const newAngle = angle + velocitiesArray[i / 3 * 2];
                positionsArray[i] = Math.cos(newAngle) * distance;
                positionsArray[i + 1] = Math.sin(newAngle) * distance;
            }

            positionsAttribute.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup function to dispose Three.js resources
        return () => {
            if (rendererRef.current) {
                rendererRef.current.dispose(); // Dispose renderer
            }
            // Dispose geometries and materials of objects in the scene
            scene.traverse(object => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    object.material.dispose();
                }
            });
        };
    }, []);

    return <div ref={sceneRef} />;
}
