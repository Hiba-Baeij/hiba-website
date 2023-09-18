"use client"
import React from 'react'
import SendMessage from './SendMessage';
import { motion } from "framer-motion"

export default function () {
    return (
        <>
            <div className='grid grid-cols-2 md:mx-16 md:gap-10 gap-5'>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 2.9,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='md:col-span-1 col-span-2'>
                    <input className='h-12 bg-dark w-full rounded-full outline-primary' placeholder='Your Name' type='text' name='name' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 3.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='md:col-span-1 col-span-2'>
                    <input className='h-12 bg-dark w-full rounded-full outline-primary' placeholder='Your Email' type='email' name='email' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 3.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='col-span-2'>
                    <input className='h-12 bg-dark w-full rounded-full outline-primary' placeholder='Your Subject' type='text' name='subject' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 3.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='col-span-2'>
                    <textarea className='h-40 bg-dark w-full rounded-3xl outline-primary' placeholder='Your Message' name='message' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 4.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='col-span-2'>
                    <SendMessage />
                </motion.div>

            </div>
        </>
    )
}
