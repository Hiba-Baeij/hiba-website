"use client"
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

import { motion } from "framer-motion"
import { Button, Input, Textarea } from '@nextui-org/react';

export default function () {
    return (
        <>
            <div className='grid grid-cols-2 md:mx-16 md:gap-10 gap-5 mt-10'>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='md:col-span-1 col-span-2'>
                    <Input type="text" label="Your Name" name='name' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 2.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='md:col-span-1 col-span-2'>
                    <Input type="email" label="Your Email" name='email' />

                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 2.4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='col-span-2'>
                    <Input type="text" label="Your Subject" name='subject' />

                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 2.6,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='col-span-2'>
                    <Textarea
                        label="Message"
                        placeholder="Your Message"
                        className="max-h-xs w-full"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 2.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='col-span-2'>
                    <Button color="primary" size='lg' radius='full' endContent={<FaTelegramPlane />}>Send To Me</Button>

                </motion.div>

            </div>
        </>
    )
}
