"use client"
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa6'
import { motion } from "framer-motion"
import { BsDiscord } from 'react-icons/bs'

export default function SectionOne() {
    return (
        <>
            <motion.h2 initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='text-xl font-semibold mb-4'>DON'T BE SHY !</motion.h2>
            <motion.p initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>I am always open to contact me,
                creative ideas or opportunities to
                be part of your visions.</motion.p>

            <div className='flex justify-start items-start flex-col md:mt-6 mt-2'>

                <div className='flex justify-start items-start flex-col mt-6 gap-10 w-full'>

                    <motion.div initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className='flex justify-start flex-col items-start '>
                        <span>ADDRESS POINT</span>
                        <span>Aleppo, Syria</span>
                    </motion.div>


                    <motion.div initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className='flex justify-start flex-col items-start '>
                        <span>MAIL ME</span>
                        <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>hibabeiaj@gmail.com</a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className='flex justify-start flex-col items-start '>
                        <span>CALL ME</span>
                        <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>+930 967283981</a>
                    </motion.div>

                </div>
                <div className='flex justify-start items-start gap-6 mt-10 w-full'>
                    <motion.a initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} href='https://www.facebook.com/hiba.be.756/' target='_blank' className='overflow-hidden text-gray-300 opacity-80 rounded-full flex justify-center items-center'><FaFacebook size={30} /></motion.a>
                    <motion.a initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} href='https://t.me/Haboosh78' target='_blank' className='text-gray-300 opacity-80 rounded-full flex justify-center items-center'><FaTelegram size={30} /></motion.a>
                    <motion.a initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} href='https://www.din.com/in/hiba-baeij-59573222b/' target='_blank' className='text-gray-300 opacity-80 rounded-full flex justify-center items-center'><FaLinkedin size={30} /></motion.a>
                    <motion.a initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} href='https://www.din.com/in/hiba-baeij-59573222b/' target='_blank' className='text-gray-300 opacity-80 rounded-full flex justify-center items-center'><BsDiscord size={30} /></motion.a>
                    <motion.a initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} href='https://www.instagram.com/hiba.be.756/' target='_blank' className='text-gray-300 opacity-80 rounded-full flex justify-center items-center'><FaInstagram size={30} /></motion.a>

                </div>
            </div>
        </>
    )
}
