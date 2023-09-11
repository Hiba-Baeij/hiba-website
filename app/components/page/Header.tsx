"use client"
import React from 'react'
import { motion } from "framer-motion";
function Header() {
    return (
        <motion.div initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }} className=" text-white">

            <div className="flex justify-center lg:justify-start items-center lg:items-start flex-col">
                <div className="flex justify-start items-center gap-5">
                    <div className="text-5xl lg:block hidden bg-primary w-10 h-1 rounded-md mt-1"></div>
                    <h2 className="text-4xl lg:text-5xl leading-tight font-bold ">I'M HIBA BAEEJ. </h2>
                </div>
                <h2 className="text-2xl lg:text-5xl leading-tight font-bold mt-3 lg:ml-16 ml-0">
                    WEB DEVELOPER
                </h2>
            </div>
            <p className="w-max-[32rem] lg:w-[32rem] mt-8 leading-loose tracking-wide text-base lg:text-left text-center">Im a front‑end developer focused on crafting clean &  user‑friendly experiences, I am passionate about building excellent software  that improves the lives of those around me.</p>
        </motion.div>
    )
}

export default Header