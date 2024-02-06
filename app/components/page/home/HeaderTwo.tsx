"use client"
import React from 'react'
import { Avatar } from '@nextui-org/react';
import { techniques } from '@/data/technologies';
import Image from 'next/image';
import { motion } from 'framer-motion';

function HeaderTwo() {

    return (
        <div className="flex justify-center w-full">

            <div className="flex gap-5 justify-center items-center flex-wrap w-[400px]">
                {
                    techniques.map(tech => (
                        <motion.a initial={{ opacity: 0, x: -400 }}
                            whileInView={{ opacity: 1, x: 0 }} transition={{
                                duration: 0.3,
                                delay: tech.delay,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} href={tech.link} key={tech.title}>
                            <div className='bg-zinc-800 p-2 rounded-lg shadow flex justify-center items-center w-[61px] h-[61px] hover:scale-125 transition-all cursor-pointer'>

                                <Image src={tech.src} height={45} width={45} alt={tech.title} />
                            </div>
                        </motion.a>
                    ))
                }
            </div>
        </div>
    )
}

export default HeaderTwo