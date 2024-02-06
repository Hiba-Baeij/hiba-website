"use client"
import React from 'react'
import DownloadCv from './DownloadCv'
import PhoneNumberCopy from './PhoneNumberCopy'
import { motion } from "framer-motion"
export default function PersonalInfo() {
    return (
        <>
            <motion.h2 initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='text-xl font-semibold text-primary'

            >PERSONAL INFOS</motion.h2>
            <div className='flex w-full mt-12 gap-10 mb-10 flex-wrap'>
                <motion.ul initial={{ opacity: 0, x: -350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <div className='flex justify-start items-center gap-3'>
                        <li className='opacity-60'>First Name:</li><span className='font-bold'>Hiba</span>
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-8'>
                        <li className='opacity-60'>Age :</li>  <span className='font-bold'>22 Years</span>
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-8'>
                        <li className='opacity-60'>Phone:</li><PhoneNumberCopy />
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-8'>
                        <li className='opacity-60'>Languages:</li><span className='font-bold'> Arabic (native),English</span>
                    </div>
                </motion.ul>
                <motion.ul initial={{ opacity: 0, x: -350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <div className='flex justify-start items-center gap-3'>
                        <li className='opacity-60'>Last Name:</li><span className='font-bold'> Baeej</span>
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-8'>
                        <li className='opacity-60'>Nationaluty: </li><span className='font-bold'>Syria</span>
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-8'>
                        <li className='opacity-60'>Email: </li><span className='font-bold'><a target="_blank" rel="link-cv" href="https://mail.google.com/mail/u/0/"> hibabeiaj@gmail.com</a></span>
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-8'>
                        <li className='opacity-60'>Birthday:</li><span className='font-bold'> 10 july 2001</span>
                    </div>
                </motion.ul>
            </div>
            <motion.div initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <DownloadCv />
            </motion.div>
        </>
    )
}
