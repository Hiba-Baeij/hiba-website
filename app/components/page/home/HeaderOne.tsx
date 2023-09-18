"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { FaUser } from "react-icons/fa6"

function HeaderOne() {
    return (
        <div className=" text-white">
            <div className="flex justify-start mx-8 items-start flex-col">
                <motion.h2 initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} style={{ lineHeight: '1.3' }} className='font-extrabold lg:text-6xl md:text-4xl text-3xl tracking-wider leading-normal'>Hi,</motion.h2>
                <motion.h2 initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} style={{ lineHeight: '1.3' }} className='mt-2 font-extrabold lg:text-6xl md:text-4xl text-3xl tracking-wider leading-normal'>
                    I'M<strong className='text-[#17C4EA]'> HIBA BAEEJ</strong>
                </motion.h2>
                <motion.div initial={{ opacity: 0, x: -350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='mt-6 md:block hidden'>
                    <Link href='/contact'>
                        <div className='flex justify-start items-center gap-5'>
                            <span className='font-bold'>CONTACT ME</span> <FaUser size={20} />
                        </div>
                        <Image className='mt-2' width={160} height={0} src="/shapes/lines/line-verticl.svg" alt="image-line" />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default HeaderOne