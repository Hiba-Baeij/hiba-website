"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { FaUser } from "react-icons/fa6"
import { Button } from '@nextui-org/react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

function HeaderOne() {
    return (
        <div className="flex justify-start items-start flex-col px-10 pl-20">
            <motion.h2 initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }} style={{ lineHeight: '1.3' }} className='mt-2 font-extrabold lg:text-5xl md:text-4xl text-3xl tracking-wide leading-10'>
                Hi I'm <strong className='text-primary'> HIBA BAEEJ</strong>, Front End Developer And I'm Lucky To Work With You.
            </motion.h2>

            <motion.div initial={{ opacity: 0, x: -350 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 1.1,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='mt-6 flex justify-between items-center flex-wrap gap-5'>
                <motion.div initial={{ opacity: 0, x: -350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='md:block hidden'>
                    <Button color="secondary" size='lg' radius='full' endContent={<FaUser />}>Contact Me</Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='md:block hidden'>
                    <Button color="default" size='lg' radius='full' variant="bordered" className='text-light' endContent={<IoLogoGithub color='#fff' size={20} />}>Github</Button>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default HeaderOne