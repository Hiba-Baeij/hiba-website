import React from 'react'
import type { Metadata } from 'next'
import AnimationGroupImage from './components/AnimationGroupImage';
import AnimationImage from './components/AnimationImage';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'I am always open to contact me',
}
export default function page() {

    return (
        <div className='contact relative md:h-screen h-fit md:px-40 px-10 flex justify-center items-center mb-20 md:mb-0 mt-20 md:mt-0'>
            <AnimationGroupImage />
            <div className='grid grid-cols-3 mt-20'>
                <div className='md:col-span-1 col-span-3 flex flex-col justify-start items-start '>
                    <SectionOne />
                </div>
                <div className='md:col-span-2 col-span-3 felx justify-center items-center mt-10 md:mt-0'>
                    <SectionTwo />
                </div>
            </div>
            <AnimationImage />
        </div>
    )
}
