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
                    delay: 3.2,
                }}>
                <Image className='block md:hidden' style={{ position: 'absolute', top: "-9rem", left: '-3rem' }} width={200} height={200} src="/shapes/circles/circle-blue-mobile.svg" alt="image-head" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 3.2,
                }}>
                <Image className='block md:hidden' style={{ position: 'absolute', top: '-6rem', right: '0rem' }} width={100} height={50} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 3.2,
                }}>
                <Image className='md:block hidden' style={{ position: 'absolute', bottom: '75%', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-1" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 3.2,
                }}>
                <Image className='md:block hidden' style={{ position: 'absolute', top: 0, right: '-2rem', width: 'auto' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 3.2,
                }}>
                <Image className='md:block hidden' style={{ position: 'absolute', top: '-2rem', left: '40%' }} width={130} height={68} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-3" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 3.2,
                }}>
                <Image className='md:block hidden' style={{ position: 'absolute', left: '-3rem', bottom: 0, width: 'auto' }} width={120} height={0} src="/shapes/lines/line-purple.svg" alt="image-head-4" />
            </motion.div>

        </>
    )
}
