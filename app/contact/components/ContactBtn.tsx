'use client'
import PBtn from '@/app/components/PBtn'
import Image from 'next/image'
import React from 'react'
import { TbSend } from 'react-icons/tb';

export default function ContactBtn() {
    const handleButtonClick = () => {
        // Handle the click event here
        console.log('Button clicked!');
    };

    return (
        <PBtn className='top-4 -left-2' onClick={() => handleButtonClick} text='Send Message' border={<Image src='/shapes/ovals/oval-green.svg' height={97} width={200} alt='border' />} icon={<TbSend size={20} color='#fff' />}></PBtn>

    )
}
