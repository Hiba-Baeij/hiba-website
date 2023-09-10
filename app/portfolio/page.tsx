"use client"

import { useDriveResolver } from '@/utils/useDriveResolver';
import Image from 'next/image';
import React from 'react'

import 'swiper/css';
import '../styles/style.css'

const works = [
    {
        title: "Broker Managment",
        text: "",
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
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
        link: '',
        images: ["https://drive.google.com/file/d/1MLxW0icmtH5zifORBmkAyuftPidVIlfN/view?usp=drive_link"]
    },
    {
        title: "Elearning",
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
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
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1PgyjvGi-xRmwk5XMo6cFlJXK9p1HTsoP/view?usp=drive_link"
        ]
    },
    {
        title: "Fly Order",
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
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
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
        link: '',
        images: [
            "https://drive.google.com/file/d/1DMwPbI8bTnXTGqOpBXTjBiFaUMbqQcYT/view?usp=drive_link",
            "https://drive.google.com/file/d/1BTqYl4cmWDQtlfMm-lQjiPz3oQ45bLAX/view?usp=drive_link"
        ]
    },
    {
        title: "Qr Germany",
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
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
        text: "",
        icons: ['/icons/vue.webp', '/icons/tailwind.webp', '/icons/vite.webp'],
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
export default function page() {


    return (
        <div className='portfolio relative h-screen px-40 mt-48'>
            <Image style={{ position: 'absolute', top: '-10rem', right: '-2rem' }} width={100} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            <Image style={{ position: 'absolute', top: '-10rem', left: '40%' }} width={130} height={68} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-3" />

            <Image style={{ position: 'absolute', top: '-22rem', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-1" />

            <div className='grid grid-cols-6'>
                {
                    works.map((work, index) => {
                        return (
                            index % 2 == 0 ?
                                <>
                                    <div className='col-span-3 hover:cursor-pointer my-5'>
                                        <Image alt='work-image' style={{ borderRadius: '15px', border: "4px solid #2c2e2ebe" }} height={350} width={600} loader={() => useDriveResolver(work.images[0])} src={useDriveResolver(work.images[0])}></Image>

                                    </div>
                                    <div className='col-span-3 relative p-10 pt-0 my-5'>
                                        <h2 className='text-5xl font-bold opacity-50 text-end'>{
                                            (index + 1).toLocaleString("en-US", {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false,
                                            })
                                        }</h2>
                                        <h2 className='text-4xl font-bold'>{work.title}</h2>
                                        <div className='flex justify-start items-center gap-5 mt-4'>
                                            <span>build with </span>
                                            {
                                                work.icons.map((icon) =>
                                                    <img src={icon} width={50} alt="" className='hover:scale-125 transition-all cursor-pointer' />
                                                )
                                            }

                                        </div>

                                    </div>

                                </>
                                :
                                <>
                                    <div className='col-span-3 relative p-10 pt-0 my-5'>
                                        <h2 className='text-5xl font-bold opacity-50 text-end'>{
                                            (index + 1).toLocaleString("en-US", {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false,
                                            })
                                        }</h2>
                                        <h2 className='text-4xl font-bold'>{work.title}</h2>
                                        <div className='flex justify-start items-center gap-5 mt-4'>
                                            <span>build with </span>
                                            {
                                                work.icons.map((icon) =>
                                                    <img src={icon} width={50} alt="" className='hover:scale-125 transition-all cursor-pointer' />
                                                )
                                            }

                                        </div>

                                    </div>
                                    <div className='col-span-3 hover:cursor-pointer my-5'>
                                        <Image style={{ objectFit: 'contain', borderRadius: '15px', border: "4px solid #2c2e2ebe" }} alt='work-image' height={350} width={600} loader={() => useDriveResolver(work.images[0])} src={useDriveResolver(work.images[0])}></Image>

                                    </div>
                                </>


                        )
                    })
                }

            </div>
        </div>
    )
}
