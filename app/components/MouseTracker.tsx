"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react';

export default function MouseTracker() {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const svgCircleRef = useRef<SVGCircleElement | null>(null);

    useEffect(() => {
        // Function to handle the pointermove event
        const handleMouseMove = (e: PointerEvent) => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });

            // Adjust the SVG circle's position
            if (svgCircleRef.current) {
                svgCircleRef.current.setAttribute('cx', clientX.toString());
                svgCircleRef.current.setAttribute('cy', clientY.toString());
            }
        };

        // Add the event listener when the component mounts
        window.addEventListener('pointermove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('pointermove', handleMouseMove);
        };
    }, []);


    return (
        <div>
            <svg
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 7, left: 6, pointerEvents: 'none', opacity: '0.3' }}
            >
                <circle
                    ref={svgCircleRef}
                    cx={mousePosition.x}
                    cy={mousePosition.y}
                    r={22}
                    fill="#005BA4" // Change the fill color as desired
                    style={{
                        transition: 'cx 0.2s ease, cy 0.2s ease', // Add CSS transitions
                    }}
                />
            </svg>

        </div>
    )
}
