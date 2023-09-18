"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import PBtn from '../../PBtn';
import { FaDownload, FaUser, FaUserGroup } from 'react-icons/fa6';
import Link from 'next/link';
function HeaderTwo() {
    const handleButtonClick = () => {
        const url = 'https://docs.google.com/document/d/1wnoNLMPtUJqTbsE3qIOoxVwB6dgQTls2d6qIsrOO_8I/edit#heading=h.a3exikf14vl8';
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
            newWindow.focus();
        }

    };
    return (
        <div className=" text-white mx-8 mt-4 md:mt-0">

            <motion.h2 initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 1.4,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className="text-2xl leading-tight font-bold ">WEB DEVELOPER </motion.h2>
            <motion.p initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 1.7,
                    ease: [0, 0.71, 0.2, 1.01]
                }} style={{ lineHeight: 2 }} className="mb-8 w-max-[34rem] lg:w-[34rem] mt-5 tracking-wide md:text-base text-sm text-left">Im a front‑end developer focused on crafting clean &  user‑friendly experiences, I am passionate about building excellent software  that improves the lives of those around me.</motion.p>
            <motion.div initial={{ opacity: 0, x: 350 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 2,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='md:block hidden'>
                <PBtn className='top-4 left-3' border={<Image src='/shapes/ovals/oval-blue.svg' height={97} width={200} alt='border' />} onClick={() => handleButtonClick} text='Resume' icon={<FaUserGroup size={20} />}></PBtn>
            </motion.div>
            <div className='flex justify-between items-center gap-2 md:hidden'>

                <motion.div initial={{ opacity: 0, x: -350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='mt-2'>
                    <Link href='/contact'>
                        <div className='flex justify-start items-center gap-2'>
                            <span className='font-bold text-xs'>CONTACT ME</span> <FaUser size={20} />
                        </div>
                        <Image className='mt-2' width={133} height={0} src="/shapes/lines/line-verticl.svg" alt="image-line" />
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 350 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 2.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='mt-2'>

                    <a href='https://docs.google.com/document/d/1wnoNLMPtUJqTbsE3qIOoxVwB6dgQTls2d6qIsrOO_8I/edit#heading=h.a3exikf14vl8' target="_blank" rel="link-cv">

                        <div className='flex justify-start items-center gap-2'>
                            <span className='font-bold text-sm uppercase'>Resume</span> <FaUserGroup size={20} />
                        </div>
                        <Image className='mt-2' width={133} height={0} src="/shapes/lines/line-yellow-vertical.svg" alt="image-line" />
                    </a>

                </motion.div>
            </div>

        </div>
    )
}

export default HeaderTwo