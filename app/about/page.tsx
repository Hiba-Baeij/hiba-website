import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import "../styles/style.css"
import PersonalInfo from './components/personal-info/PersonalInfo'
import PersonalInfoImage from './components/personal-info/PersonalInfoImage'
import Skills from './components/skills/Skills'
import Education from './components/experiences-education/Education'
import Experience from './components/experiences-education/Experience'

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Personal Information ,Skills, Experience and Education',
}



export default function page() {

    return (

        <div className='about relative md:px-40 px-10 pb-28 md:pb-20'>

            {/* PERSONAL INFOS */}
            <section className='personal-info mt-20 md:mt-0'>

                <div className='grid grid-cols-2'>
                    <div className='md:col-span-1 col-span-2 md:order-1 order-2 mt-6 md:mt-0'>
                        <PersonalInfo />
                    </div>
                    <div className='md:col-span-1 col-span-2 flex justify-end items-center order-1 md:order-2 '>
                        <div className='bg-zinc-800 rounded-lg w-[280px] h-[280px]'>

                            {/* <PersonalInfoImage /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:mb-20 mb-12 mt-20 md:mt-0'></div>
            </div> */}

            {/* My Skills */}
            {/* <section>
                <h2 className='text-xl font-semibold text-center'>MY SKILLS</h2>

                <Skills />
            </section> */}

            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:my-20 my-12'></div>
            </div>
            {/* EXPERIENCE & EDUCATION */}
            <section className='mt-10'>
                <h2 className='text-xl font-semibold text-center'>EXPERIENCE & EDUCATION</h2>

                <Education />
                <Experience />

            </section>

        </div >
    )
}
