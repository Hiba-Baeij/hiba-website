import Image from 'next/image';
import React from 'react'
import type { Metadata } from 'next'
import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram, FaMessage, FaPhone, FaLocationPin } from "react-icons/fa6"
import ContactBtn from './components/ContactBtn';


export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'I am always open to contact me',
}
export default function page() {

    return (
        <div className='contact relative md:h-screen h-fit md:px-40 px-10 flex justify-center items-center mb-20 md:mb-0 mt-20 md:mt-0'>
            <Image className='block md:hidden' style={{ position: 'absolute', top: "-9rem", left: '-3rem' }} width={200} height={200} src="/shapes/circles/circle-blue-mobile.svg" alt="image-head" />
            <Image className='block md:hidden' style={{ position: 'absolute', top: '-6rem', right: '0rem' }} width={100} height={50} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />

            <Image className='md:block hidden' style={{ position: 'absolute', bottom: '75%', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-1" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: 0, right: '-2rem', width: 'auto' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-2rem', left: '40%' }} width={130} height={68} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-3" />
            <Image className='md:block hidden' style={{ position: 'absolute', left: '-3rem', bottom: 0, width: 'auto' }} width={120} height={0} src="/shapes/lines/line-purple.svg" alt="image-head-4" />

            <div className='grid grid-cols-3 mt-20'>
                <div className='md:col-span-1 col-span-3 flex flex-col justify-start items-start '>
                    <h2 className='text-xl font-semibold mb-4'>DON'T BE SHY !</h2>
                    <p>I am always open to contact me,
                        creative ideas or opportunities to
                        be part of your visions.</p>


                    <div className='flex justify-start items-start flex-col md:mt-6 mt-2'>

                        <div className='flex justify-start items-start flex-col mt-6 gap-10 w-full'>

                            <div className='flex justify-start flex-col items-start '>
                                <span>ADDRESS POINT</span>
                                <span>Aleppo, Syria</span>
                            </div>


                            <div className='flex justify-start flex-col items-start '>
                                <span>MAIL ME</span>
                                <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>hibabeiaj@gmail.com</a>
                            </div>

                            <div className='flex justify-start flex-col items-start '>
                                <span>CALL ME</span>
                                <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>+930 967283981</a>
                            </div>

                        </div>
                        <div className='flex justify-start items-start gap-6 mt-10 w-full'>
                            <a href='https://www.facebook.com/hiba.be.756/' target='_blank' className='overflow-hidden bg-dark w-12 h-12 rounded-full flex justify-center items-center'><FaFacebook size={20} /></a>
                            <a href='https://t.me/Haboosh78' target='_blank' className='bg-dark w-12 h-12 rounded-full flex justify-center items-center'><FaTelegram size={20} /></a>
                            <a href='https://www.din.com/in/hiba-baeij-59573222b/' target='_blank' className='bg-dark w-12 h-12 rounded-full flex justify-center items-center'><FaLinkedin size={20} /></a>
                            <a href='https://www.instagram.com/hiba.be.756/' target='_blank' className='bg-dark w-12 h-12 rounded-full flex justify-center items-center'><FaInstagram size={20} /></a>

                        </div>
                    </div>

                </div>
                <div className='md:col-span-2 col-span-3 felx justify-center items-center mt-10 md:mt-0'>
                    <div className='grid grid-cols-2 md:mx-16 md:gap-10 gap-5'>
                        <div className='md:col-span-1 col-span-2'>
                            <input className='h-12 bg-dark w-full rounded-full outline-primary' placeholder='Your Name' type='text' name='name' />
                        </div>
                        <div className='md:col-span-1 col-span-2'>
                            <input className='h-12 bg-dark w-full rounded-full outline-primary' placeholder='Your Email' type='email' name='email' />
                        </div>
                        <div className='col-span-2'>
                            <input className='h-12 bg-dark w-full rounded-full outline-primary' placeholder='Your Subject' type='text' name='subject' />
                        </div>
                        <div className='col-span-2'>
                            <textarea className='h-40 bg-dark w-full rounded-3xl outline-primary' placeholder='Your Message' name='message' />

                        </div>
                        <div className='col-span-2'>
                            <ContactBtn />
                        </div>

                    </div>
                </div>
            </div>
            <Image className='md:block hidden' style={{ position: 'absolute', right: '-1rem', top: '35rem' }} width={120} height={120} src="/shapes/triangles/triangle-pink.svg" alt="image-head-7" />

        </div>
    )
}
