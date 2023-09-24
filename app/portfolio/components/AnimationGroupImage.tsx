"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function AnimationGroupImage() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.8,
                }}>
                <Image className='md:block hidden' style={{ position: 'absolute', top: '-10rem', right: '-2rem' }} width={100} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />

            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.7,
                }}>
                <Image className='md:block hidden' style={{ position: 'absolute', top: '-10rem', left: '40%' }} width={130} height={68} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-3" />

            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                }}>
                <Image className='block md:hidden' style={{ position: 'absolute', top: '-8rem', right: '1rem' }} width={100} height={58} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-3" />

            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1.3,
                }}>
                <Image style={{ position: 'absolute', top: '-22rem', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-1" />

            </motion.div>


        </>
    )
}
