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
                delay: 2.5,

            }} className='md:block hidden'>

            <Image style={{ position: 'absolute', right: '-3rem', top: '35rem' }} priority width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />
        </motion.div>

    )
}
