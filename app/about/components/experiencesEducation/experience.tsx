"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
const experiences = [

    {
        year: '2022 - 2023',
        title: 'FRONTEND VUE JS DEVELOPER',
        at: 'Elkood',
        location: 'Syria - Aleppo',
        text: 'I began my journey at The ELKOOD Company as a novice, where I received training and qualifications. From there, I entered the field and collaborated on multiple projects using various technologies and templates. I also enhanced the themes we employed, leveraging frameworks like Vue.js and Next.js. You can find these projects in my portfolio'
    },
    {
        year: '2022',
        title: 'FRONTEND VUE JS DEVELOPER',
        at: 'JetOrder',
        location: 'Irbid - Jordan',
        text: 'I Worked as Freelancer at MindTorches Company on JetOrder project Which is an project that provides customers with the service of creating their own e-commerce, and it is a project that consists of 3 applications. two control panels, a main dashboard for project management and a dashboard for the store owner, and a mobile application .'
    },

    {
        year: '2022-2023',
        title: 'FRONTEND REACT JS DEVELOPER',
        at: '',
        location: '',
        text: 'I was attracted to React and decided to delve deeper into it due to its popularity. I have been working with React for a year on diverse projects, and I now aspire to apply my expertise within a specific company, as I have fully dedicated myself to it. I developed my website using Next.js and contributed to various projects, including a delivery order project.'
    },
]
export default function experience() {
    return (
        <>
            {/* EXPERIENCE */}
            <div className='flex justify-start items-center md:mt-32 mt-10'>
                <motion.div initial={{ opacity: 0, y: -400 }}
                    whileInView={{ opacity: 1, y: 0 }} transition={{
                        duration: 0.3,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>

                    <Image className='md:block hidden' width={100} height={200} src="/shapes/rectangular/experience.svg" alt="image-head-2" />
                </motion.div>
                <div className='w-full'>
                    {
                        experiences.map((ex, index) => {
                            return (

                                <div className={index == 1 ? 'flex justify-start items-center w-full my-10' : 'flex justify-start items-center w-full'}>
                                    <motion.div initial={{ opacity: 0, x: -400 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.8,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className={index == 1 ? 'md:block hidden border-2 border-dashed border-white w-[20%]' : 'md:block hidden border-2 border-dashed border-white w-[60%]'}></motion.div>
                                    <motion.div initial={{ opacity: 0, x: -400 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 1,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='h-[350px] md:py-6 md:pl-6 md:pr-4 p-4 border-2 border-dashed border-white rounded-xl w-[30rem]'>

                                        <div className='flex flex-wrap justify-start flex-col items-start mb-3 gap-2'>
                                            <div className='flex flex-wrap justify-start gap-6'>

                                                <h2 style={{
                                                    background: '-webkit-linear-gradient(45deg, #0D8BFF , #6F109B)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                }} className='font-bold text-lg '>{ex.title}</h2>
                                            </div>
                                            <div className='flex flex-wrap justify-start gap-6'>
                                                {
                                                    ex.at && ex.location ?
                                                        <>
                                                            <span>{ex.at}</span>
                                                            <span>{ex.location}</span>
                                                        </> : null
                                                }
                                                <span className='font-normal text-xs text-white bg-dark rounded-full px-2 py-1'>{ex.year}</span>
                                            </div>
                                        </div>
                                        <article className='h-[200px] overflow-y-scroll text-grayLight'>
                                            <p style={{ lineHeight: 2.8 }} className='tracking-wider'>{ex.text}</p>
                                        </article>

                                    </motion.div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}
