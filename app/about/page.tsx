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
            <Image className='block md:hidden' style={{ position: 'absolute', top: "-12rem", left: '-5rem' }} width={200} height={200} src="/shapes/circles/circle-red-mobile.svg" alt="image-head" />
            <Image className='block md:hidden' style={{ position: 'absolute', top: '-6rem', right: '0rem' }} width={100} height={50} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-6rem', right: '-2rem', width: 'auto' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '3rem', left: '60%', }} width={80} height={33} src="/shapes/zigzags/zigzag-yellow.svg" alt="image-head-2" />
            <Image className='lg:block hidden ' style={{ position: 'absolute', right: '-15rem', top: '2rem' }} width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-4rem', left: '-4rem' }} width={200} height={200} src="/shapes/circles/circle-small-blue.svg" alt="image-head-6" />

            {/* PERSONAL INFOS */}
            <section className='personal-info mt-20 md:mt-0'>

                <div className='grid grid-cols-2'>
                    <div className='md:col-span-1 col-span-2 md:order-1 order-2 mt-8 md:mt-0'>
                        <PersonalInfo />
                    </div>
                    <div className='md:col-span-1 col-span-2 flex justify-center items-center order-1 md:order-2'>
                        {/* <PersonalInfoImage /> */}
                    </div>
                </div>
            </section>

            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:mb-20 mb-12 mt-20 md:mt-0'></div>
            </div>

            {/* My Skills */}
            <section>
                <Skills />
            </section>

            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:my-20 my-12'></div>
            </div>
            {/* EXPERIENCE & EDUCATION */}
            <section className='mt-10'>
                <Education />
                <Experience />

            </section>

        </div >
    )
}
