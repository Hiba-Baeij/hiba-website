"use client"
import ReadMoreText from '@/app/components/ReadMore'
import { useDriveResolver } from '@/utils/useDriveResolver'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import FullScreenDialog from './FullScreenDialog'
import { Button } from '@nextui-org/react'
import { MdRemoveRedEye } from "react-icons/md";

const works = [
    {
        title: "Broker Managment",
        type: "Dashboard",
        text: "I Worked On It As Vue Developer At Elkood Frontend Team",
        description: "Broker Management is an electronic application that automates operations for brokerage companies. It offers services such as HR management, project and department oversight, document handling, cloud-based file storage via AWS, and employee authentication with varying permissions.",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1NwKOiRa5wfzSLmpzZmb7SL4Jo_XALHNk/view?usp=drive_link",
            "https://drive.google.com/file/d/1i10qtEpTatBDllp-LuYGuR-Y_R2Ft2Bs/view?usp=drive_link",
            "https://drive.google.com/file/d/1JZqRcHU3ufYlecKAU-OmZNTOnjw3W-9l/view?usp=drive_link",
            "https://drive.google.com/file/d/1JvyRnDpkMBfqkbg0aP7lSN6DR21FfEmp/view?usp=drive_link",
            "https://drive.google.com/file/d/1EYzbz8Y50G0vS0YM84OLCw8iEiKlc-5u/view?usp=drive_link",
            "https://drive.google.com/file/d/1BKRqnb8vpG93iTvnyqb6lNOfr0djgDfn/view?usp=drive_link"
        ]
    },
    {
        title: "Altin Saray",
        type: "Landing Page",
        text: "I Worked On It In Most Pages With Elkood Frontend Team",
        description: "WordPress Website Template For Turkish Real Estate Company",
        icons: ['/icons/html.webp', '/icons/css.webp', '/icons/javascript.webp'],
        link: 'https://altinsaraygrup.com/',
        images: ["https://drive.google.com/file/d/1MLxW0icmtH5zifORBmkAyuftPidVIlfN/view?usp=drive_link"]
    },
    {
        title: "Elearning",
        type: "Dashboard",
        text: "I Worked On It As Vue Developer At Elkood Frontend Team",
        description: "This educational app caters to all academic levels and facilitates collaboration among designated teachers to record lessons for each stage. Its key feature is live streaming for real-time lesson delivery, utilizing WebSocket like Signal-R technologies. The app supports multiple user and teacher accounts, offers user-specific discounts, rewards points, and includes assessments upon course completion",
        icons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1uMayLV28mW06LS1SxT2XXFZLXzuF8sWe/view?usp=drive_link",
            "https://drive.google.com/file/d/1fjJctI0NWURscVp7KqsBHvIdH03Z96Ng/view?usp=drive_link",
            "https://drive.google.com/file/d/1ov21jEnFUy-WoN1ZUgOCcpeMBB2UhYSI/view?usp=drive_link",
            "https://drive.google.com/file/d/1UUtpomrRnGEVfmtP9gpaESQlolLsRHMc/view?usp=drive_link"
        ]
    },
    {
        title: "Mr Course",
        type: "Dashboard",
        text: "I Worked On It As Vue Developer At Elkood Frontend Team",
        description: "Dashboard Like E-Learning Mobile Application Content Management",
        icons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1PgyjvGi-xRmwk5XMo6cFlJXK9p1HTsoP/view?usp=drive_link"
        ]
    },
    {
        title: "Fly Order",
        type: "Ecommerce & Dashboard",
        text: "I Worked On It As Vue Developer At Elkood Frontend Team",
        description: "FlyOrder is a dashboard application designed for managing food delivery orders in the Damascus Governorate. It encompasses a wide range of features, including area and city management, store and branch management, product management, order processing from mobile applications, handling invoices, tracking sales and profit percentages for stores, application management, as well as notifications management using WebSocket and Signal-R, among other functionalities.",
        icons: ['/icons/vue.webp', '/icons/pinia.svg', '/icons/tailwind.webp', '/icons/vite.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1mwEbppfHFWNjxohWqLs5uxX3W3bB3_vu/view?usp=drive_link",
            "https://drive.google.com/file/d/1Z8r45lrIn9HhvgOkm5eXQDVy6WVjlK1L/view?usp=drive_link",
            "https://drive.google.com/file/d/1KWQjKcjBUWGvB7SCV9ANYXtQJjc5nXTw/view?usp=drive_link",
            "https://drive.google.com/file/d/1x5pb2HQstzT3en-D97Lr9PjY5esazYpA/view?usp=drive_link",
            "https://drive.google.com/file/d/1mxzgSV_DEKqOR-_3TiO1OLuhaeXRKwZv/view?usp=drive_link",
            "https://drive.google.com/file/d/1PhbRgUkfkZiNao1eQRzHaTp0m-vvoNqr/view?usp=drive_link",
            "https://drive.google.com/file/d/13bRFWIul6EXhTSXXXuQdEuhgcU5cTRla/view?usp=drive_link",
            "https://drive.google.com/file/d/1ffzH-xC1S3VkR7KfSBcyYx61rfCxtV3p/view?usp=drive_link",
            "https://drive.google.com/file/d/1DztSMowvlyHDV2ZiU0KJPpmcopBzgO2V/view?usp=drive_link",
            "https://drive.google.com/file/d/1ySk-cgdgcYAutyHomT3ucoEhh9R-5bsy/view?usp=drive_link"
        ]
    },

    {
        title: "GoldenWrap",
        type: "Ecommerce & Dashboard",
        text: "I Worked On It As Vue Developer At Elkood Frontend Team",
        description: "A Simple Menu Display App For Golden Wrap Restaurant With A Content Dashboard.",
        icons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1DMwPbI8bTnXTGqOpBXTjBiFaUMbqQcYT/view?usp=drive_link",
            "https://drive.google.com/file/d/1BTqYl4cmWDQtlfMm-lQjiPz3oQ45bLAX/view?usp=drive_link"
        ]
    },
    {
        title: "Qr Germany",
        type: "Landing Page & Dashboard",
        text: "I Worked On It As Vue Developer At Elkood Frontend Team",
        description: "Numerous companies incorporate QR codes into their marketing and advertising campaigns to convey diverse data types like website links, social media profiles, contact information, phone numbers, coupons, business hours, or PDF files containing product prices and service details. At QR Code Germany, we prioritize user-friendliness, offering a range of straightforward and practical options to assist you in effortlessly and cost-effectively delivering valuable information to your customers",
        icons: ['/icons/vue.webp', '/icons/nuxt.svg', '/icons/pinia.svg', '/icons/tailwind.webp', '/icons/vite.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1-nozIi4wi9m_y86W-os9jDE5nwQS34Oy/view?usp=drive_link",
            "https://drive.google.com/file/d/1YHPASRX2p2xCraWFj4D_0yBlNVVymI9u/view?usp=drive_link",
            "https://drive.google.com/file/d/1JrzuTZwUU8SbG4qhdSZMSon0EZaLXr4-/view?usp=drive_link",
            "https://drive.google.com/file/d/1aE88XxJ8D9D7QHdkVGYfDcx_YjsRwrN5/view?usp=drive_link",
            "https://drive.google.com/file/d/1p0NSQs9GlK5Rb5dukeUF_wk7BP_edpem/view?usp=drive_link",
            "https://drive.google.com/file/d/1qgXnW8G9Ud1F97RE3fxIrl-X27zoQDk0/view?usp=drive_link"
        ]
    },
    {
        title: "Stay Home",
        type: "Dashboard",
        text: "I Worked On It As React Developer To fourth year project",
        description: "This platform facilitates the delivery of orders to customers across Syrian provinces, offering a range of services, including personal delivery, cargo shipping, and point-to-point deliveries, all tailored to speed and customer preferences.",
        icons: ['/icons/react.webp', '/icons/redux.webp', '/icons/material-ui.svg', '/icons/vite.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1lk888Hns0AzAmGuI4EqHCZzXZT4FQIsv/view?usp=drive_link",
            "https://drive.google.com/file/d/1SIs97Gcmf7s-pohX6SBiTp0WnYgdYsiV/view?usp=drive_link",
            "https://drive.google.com/file/d/1G8YJVbtyluUxrH9vmMLg5KRbRxO3eu_C/view?usp=drive_link",
            "https://drive.google.com/file/d/17xP7f69OxhGo_t4DrpQNh8iDyQuI_Vbu/view?usp=drive_link",
            "https://drive.google.com/file/d/1p1EKqL35aZnUlE58mGK1AY7TVvDRhN4L/view?usp=drive_link",
            "https://drive.google.com/file/d/1RtEgTBpWxAcALuobGuoUUYsiYnepf2tc/view?usp=drive_link",
            "https://drive.google.com/file/d/1kEciSDIg_FMTVfJiOkkQtY3envewrbB_/view?usp=drive_link",
            "https://drive.google.com/file/d/1Nje48IVophQpLa21vca8ETDQlzGIK-8a/view?usp=drive_link"


        ]
    },
]
export default function FullScreenPortfolio() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <>
            {
                works.map((work, index) => {
                    return (
                        index % 2 == 0 ?
                            <div key={work.title} className='col-span-6'>
                                <div className='grid grid-cols-6 gap-16'>

                                    <motion.div initial={{ opacity: 0, x: -500 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='md:col-span-3 col-span-6 hover:cursor-pointer h-full w-full'>
                                        <Image alt='work-image' style={{ borderRadius: '15px', border: "4px solid #2c2e2ebe" }} height={350} width={600} loader={() => useDriveResolver(work.images[0])} src={useDriveResolver(work.images[0])}></Image>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -500 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='md:col-span-3 col-span-6 relative bg-zinc-900 rounded-lg h-[347px] overflow-hidden overflow-y-scroll'>
                                        <div className='p-4 flex justify-start items-center gap-3'>
                                            <div className='bg-red-500 rounded-full p-1 w-3 h-3'></div>
                                            <div className='bg-yellow-500 rounded-full p-1 w-3 h-3'></div>
                                            <div className='bg-green-500 rounded-full p-1 w-3 h-3'></div>
                                        </div>
                                        <h2 className='md:text-5xl text-3xl font-bold opacity-50 text-end absolute top-3 right-4'>{
                                            (index + 1).toLocaleString("en-US", {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false,
                                            })
                                        }</h2>
                                        {
                                            work.type === 'Landing Page' ?
                                                <div className='absolute top-4 right-24'>
                                                    <Button isIconOnly onClick={openDialog} color="primary" size='md' radius='md'><MdRemoveRedEye size={20} /></Button>

                                                    <FullScreenDialog isOpen={isDialogOpen} onClose={closeDialog} />
                                                </div> : null
                                        }
                                        <div className='flex justify-start items-start flex-col p-4'>

                                            <h2 className='md:text-3xl text-xl font-bold'>{work.title}</h2>
                                            <h2 className='text-md mt-5 text-grayLight font-bold'>{work.type}</h2>

                                            <div className='flex justify-start items-start flex-col gap-5 mt-4 text-grayLight'>
                                                <p>{work.text}</p>
                                                <ReadMoreText text={work.description} />
                                                <div className='flex justify-start items-center gap-5 flex-wrap'>
                                                    <span>build with </span>
                                                    <div className='flex justify-start items-center gap-5'>
                                                        {
                                                            work.icons.map((icon) =>
                                                                <img src={icon} alt="" className='h-12 w-12 object-contain hover:scale-125 transition-all cursor-pointer' />
                                                            )
                                                        }
                                                    </div>

                                                </div>


                                            </div>
                                        </div>


                                    </motion.div>
                                    {/* <motion.div initial={{ opacity: 0, x: -500 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='md:col-span-3 col-span-6 relative flex justify-center items-start flex-col'>
                                        <h2 className='md:text-5xl text-3xl font-bold opacity-50 text-end absolute top-3 right-0'>{
                                            (index + 1).toLocaleString("en-US", {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false,
                                            })
                                        }</h2>
                                        <h2 className='md:text-4xl text-2xl font-bold'>{work.title}</h2>
                                        <h2 className='text-lg mt-5 text-grayLight font-bold'>{work.type}</h2>
                                        <div className='flex justify-start items-start flex-col gap-5 mt-4 text-grayLight'>
                                            <p>{work.text}</p>
                                            <ReadMoreText text={work.description} />
                                            <div className='flex justify-start items-center gap-5 flex-wrap'>

                                                <span>build with </span>
                                                <div className='flex justify-start items-center gap-5'>

                                                    {
                                                        work.icons.map((icon) =>
                                                            <img src={icon} alt="" className='h-12 w-12 object-contain hover:scale-125 transition-all cursor-pointer' />
                                                        )
                                                    }
                                                </div>

                                            </div>
                                            <Button onClick={openDialog} color="secondary" size='md' radius='md' endContent={<MdRemoveRedEye size={20} />}>View</Button>

                                            <FullScreenDialog isOpen={isDialogOpen} onClose={closeDialog} />

                                        </div>

                                    </motion.div> */}
                                </div>

                            </div>
                            :
                            <div key={work.title} className='col-span-6 '>
                                <div className='grid grid-cols-6 gap-8'>
                                    <motion.div initial={{ opacity: 0, x: 500 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.5,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='md:col-span-3 col-span-6 relative bg-zinc-900 rounded-lg h-[347px] overflow-hidden overflow-y-scroll'>
                                        <div className='p-4 flex justify-start items-center gap-3'>
                                            <div className='bg-red-500 rounded-full p-1 w-3 h-3'></div>
                                            <div className='bg-yellow-500 rounded-full p-1 w-3 h-3'></div>
                                            <div className='bg-green-500 rounded-full p-1 w-3 h-3'></div>
                                        </div>
                                        <h2 className='md:text-5xl text-3xl font-bold opacity-50 text-end absolute top-3 right-4'>{
                                            (index + 1).toLocaleString("en-US", {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false,
                                            })
                                        }</h2>
                                        {
                                            work.type === 'Landing Page' ?
                                                <div className='absolute top-4 right-24'>
                                                    <Button isIconOnly onClick={openDialog} color="primary" size='md' radius='md'><MdRemoveRedEye size={20} /></Button>

                                                    <FullScreenDialog isOpen={isDialogOpen} onClose={closeDialog} />
                                                </div> : null
                                        }
                                        <div className='flex justify-start items-start flex-col p-4'>

                                            <h2 className='md:text-3xl text-xl font-bold'>{work.title}</h2>
                                            <h2 className='text-md mt-5 text-grayLight font-bold'>{work.type}</h2>

                                            <div className='flex justify-start items-start flex-col gap-5 mt-4 text-grayLight'>
                                                <p>{work.text}</p>
                                                <ReadMoreText text={work.description} />
                                                <div className='flex justify-start items-center gap-5 flex-wrap'>
                                                    <span>build with </span>
                                                    <div className='flex justify-start items-center gap-5'>
                                                        {
                                                            work.icons.map((icon) =>
                                                                <img src={icon} alt="" className='h-12 w-12 object-contain hover:scale-125 transition-all cursor-pointer' />
                                                            )
                                                        }
                                                    </div>

                                                </div>


                                            </div>
                                        </div>


                                    </motion.div>
                                    {/* <motion.div initial={{ opacity: 0, x: 500 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.5,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='md:col-span-3 col-span-6 relative flex justify-center items-start flex-col'>
                                        <h2 className='md:text-5xl text-3xl font-bold opacity-50 text-end absolute top-6 right-0'>{
                                            (index + 1).toLocaleString("en-US", {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false,
                                            })
                                        }</h2>
                                        <h2 className='md:text-4xl text-2xl font-bold'>{work.title}</h2>
                                        <h2 className='text-lg mt-5 text-grayLight font-bold'>{work.type}</h2>

                                        <div className='flex justify-start items-start flex-col gap-5 mt-4 text-grayLight'>
                                            <p>{work.text}</p>
                                            <ReadMoreText text={work.description} />
                                            <div className='flex justify-start items-center gap-5 flex-wrap'>

                                                <span>build with </span>
                                                <div className='flex justify-start items-center gap-5'>

                                                    {
                                                        work.icons.map((icon) =>
                                                            <img src={icon} alt="" className='h-12 w-12 object-contain hover:scale-125 transition-all cursor-pointer' />
                                                        )
                                                    }
                                                </div>

                                            </div>
                                            <Button onClick={openDialog} color="primary" size='md' radius='md' endContent={<MdRemoveRedEye size={20} />}>View</Button>

                                            <FullScreenDialog isOpen={isDialogOpen} onClose={closeDialog} />

                                        </div>

                                    </motion.div> */}
                                    <motion.div initial={{ opacity: 0, x: 500 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{
                                            duration: 0.3,
                                            delay: 0.5,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }} className='md:col-span-3 col-span-6 hover:cursor-pointer h-full w-full'>
                                        <Image style={{ objectFit: 'contain', borderRadius: '15px', border: "4px solid #2c2e2ebe" }} alt='work-image' height={350} width={600} loader={() => useDriveResolver(work.images[0])} src={useDriveResolver(work.images[0])}></Image>

                                    </motion.div>
                                </div>
                            </div>


                    )
                })
            }
        </>
    )
}
