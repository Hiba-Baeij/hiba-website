"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import PBtn from '../PBtn';
import { FaDownload } from 'react-icons/fa6';
function HeaderTwo() {
    const handleButtonClick = () => {
        // Handle the click event here
        console.log('Button clicked!');
    };
    return (
        <motion.div initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }} className=" text-white">

            <h2 className="text-xl leading-tight font-bold ">WEB DEVELOPER </h2>
            <p className="mb-8 w-max-[34rem] lg:w-[34rem] mt-5 leading-loose tracking-wide text-base lg:text-left text-center">Im a front‑end developer focused on crafting clean &  user‑friendly experiences, I am passionate about building excellent software  that improves the lives of those around me.</p>
            <PBtn className='top-4 -left-1' border={<Image src='/shapes/ovals/oval-blue.svg' height={97} width={200} alt='border' />} onClick={handleButtonClick} text='Download CV' icon={<FaDownload size={20} />}></PBtn>

        </motion.div>
    )
}

export default HeaderTwo