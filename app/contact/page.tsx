import React from 'react'
import '../styles/style.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram, FaMessage, FaPhone, FaLocationPin } from "react-icons/fa6"
import { TbSend } from "react-icons/tb"
import PBtn from '../components/PBtn'

export default function page() {
    const handleButtonClick = () => {
        // Handle the click event here
        console.log('Button clicked!');
    };
    return (
        <div className='contact relative h-screen px-40'>
            <div className='flex justify-center items-center w-full mt-10'>
                <h2 className='uppercase mt-14 text-4xl tracking-wider font-black'>Get in <span className='text-primary'>Touch</span> </h2>
            </div>
            <div className='grid grid-cols-3 mt-0 md:mt-20'>
                <div className='md:col-span-1 col-span-3 flex flex-col justify-start items-start '>
                    <h2 className='text-xl font-semibold mb-4'>DON'T BE SHY !</h2>
                    <p>I am always open to contact me,
                        creative ideas or opportunities to
                        be part of your visions.</p>


                    <div className='flex justify-start items-start flex-col md:mt-6 mt-2'>

                        <div className='flex justify-start items-start flex-col mt-6 gap-10 w-full'>
                            <div className='flex justify-center items-center gap-6'>
                                <FaLocationPin size={30} color='#005BA4' />
                                {/* <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center'><FaMessage size={20} /></div> */}
                                <div className='flex justify-start flex-col items-start '>
                                    <span>ADDRESS POINT</span>
                                    <span>Aleppo, Syria</span>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-6'>
                                <FaMessage size={30} color='#005BA4' />
                                {/* <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center'><FaMessage size={20} /></div> */}
                                <div className='flex justify-start flex-col items-start '>
                                    <span>MAIL ME</span>
                                    <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>hibabeiaj@gmail.com</a>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-6 mr-8'>
                                <FaPhone size={30} color='#005BA4' />

                                {/* <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center'><FaPhone size={20} /></div> */}
                                <div className='flex justify-start flex-col items-start '>
                                    <span>CALL ME</span>
                                    <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>+930 967283981</a>
                                </div>
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
                            <PBtn onClick={handleButtonClick} text='Send Message' icon={<TbSend size={20} color='#fff' />}></PBtn>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
