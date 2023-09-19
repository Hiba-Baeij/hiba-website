"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function PersonalInfoImage() {
    return (
        <motion.div initial={{ opacity: 0, x: 350 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.3,
                delay: 1.8,
                ease: [0, 0.71, 0.2, 1.01]
            }} className='border-4 border-[#2c2e2ebe] rounded-3xl'>
            <Image className='rounded-3xl' src="/personal-info.jpg" alt='personal-image' width={300} height={200}></Image>
        </motion.div>
    )
}
