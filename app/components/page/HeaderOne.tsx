"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { FaUser } from "react-icons/fa6"

function HeaderOne() {
    return (
        <motion.div initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }} className=" text-white">

            <div className="flex justify-center lg:justify-start items-center lg:items-start flex-col">

                <h2 className='font-extrabold text-6xl tracking-wider leading-normal'>Hi,<br /> I'M<strong className='text-[#17C4EA]'> HIBA BAEEJ</strong> </h2>
                <div className='mt-2'>
                    <Link href='/'>
                        <div className='flex justify-start items-center gap-5'>
                            <span className='font-bold'>CONTACT ME</span> <FaUser size={20} />
                        </div>
                        <Image className='mt-2' width={160} height={0} src="/shapes/lines/line-verticl.svg" alt="image-line" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default HeaderOne