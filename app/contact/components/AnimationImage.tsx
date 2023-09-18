"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function AnimationImage() {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 4.5,
            }}>
            <Image className='md:block hidden' style={{ position: 'absolute', right: '-1rem', top: '35rem' }} width={120} height={120} src="/shapes/triangles/triangle-pink.svg" alt="image-head-7" />
        </motion.div>
    )
}
