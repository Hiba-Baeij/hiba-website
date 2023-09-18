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
                    delay: 2.5,
                }} className='block md:hidden'>
                <Image style={{ position: 'absolute', top: "-5rem", left: '-5rem' }} width={200} height={200} src="/shapes/circles/circle-red-mobile.svg" alt="image-head" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,

                }} className='block md:hidden'>
                <Image style={{ position: 'absolute', top: "3rem", right: '-2rem' }} width={100} height={100} src="/shapes/triangles/triangle-mobile-pink.svg" alt="image-head" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,

                }} className='md:block hidden'>
                <Image style={{ position: 'absolute', top: 0, right: '-2rem' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-1" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,

                }} className='md:block hidden'>
                <Image style={{ position: 'absolute', top: '-2rem', left: '30%' }} width={120} height={0} src="/shapes/lines/line-yellow.svg" alt="image-head-5" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,

                }} className='md:block hidden'>
                <Image style={{ position: 'absolute', top: '5rem', left: '50%' }} width={80} height={33} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-2" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,

                }} className='md:block hidden'>
                <Image style={{ position: 'absolute', bottom: '72%', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-3" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,

                }} className='md:block hidden'>
                <Image style={{ position: 'absolute', bottom: '-2rem', left: '2rem' }} width={120} height={120} src="/shapes/triangles/triangle-pink.svg" alt="image-head-7" />
            </motion.div>

        </>
    )
}
