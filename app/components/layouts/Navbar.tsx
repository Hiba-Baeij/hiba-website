"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaHouse, FaUser, FaBagShopping, FaMessage, FaMoon, FaTelegram, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const links = [
    {
        id: "1",
        path: "/",
        name: "Home",
        icon: FaHouse

    },
    {
        id: "2",
        path: "/about",
        name: "About Me",
        icon: FaUser

    },
    {
        id: "3",
        path: "/portfolio",
        name: "Portfolio",
        icon: FaBagShopping

    },
    {
        id: "4",
        path: "/contact",
        name: "Contact Me",
        icon: FaMessage
    }

];
export default function Navbar() {
    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        // Add a scroll event listener to track the scroll position
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Remove the scroll event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Check if the user has scrolled down more than a certain threshold (e.g., 100 pixels)
        if (window.scrollY > 100) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };
    return (
        <>
            <div className={isTop ? 'md:flex justify-between items-center hidden fixed right-0 top-2 z-50 ' : 'md:flex justify-between items-center hidden fixed right-0 top-0 z-50 bg-black/70 backdrop-blur-sm border-b border-[#45454598] w-full'}>
                {
                    isTop ? null : <ul className='flex justify-start items-center gap-10 px-20'>
                        <li>
                            <a href='https://www.facebook.com/hiba.be.756/' target='_blank' ><FaFacebook size={20} /></a>
                        </li>
                        <li>
                            <a href='https://t.me/Haboosh78' target='_blank'><FaTelegram size={20} /></a>
                        </li>
                        <li>
                            <a href='https://www.din.com/in/hiba-baeij-59573222b/' target='_blank'><FaLinkedin size={20} /></a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/hiba.be.756/' target='_blank'><FaInstagram size={20} /></a>
                        </li>

                    </ul>
                }
                <ul className='flex justify-end items-center gap-8 py-5 px-20'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id} >

                                    <Link href={ele.path}
                                        style={{ fontWeight: pathname == ele.path ? 'bolder' : 'lighter' }}
                                    >
                                        {ele.name}
                                    </Link>

                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className='block md:hidden fixed bottom-0 z-50 bg-black shadow-2xl shadow-white w-full'>
                <ul className='flex justify-center items-center gap-12 pb-5 pt-2'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id} >
                                    <div className='rounded mb-3' style={{ borderTop: pathname == ele.path ? '4px solid #EE3E9E' : '' }}></div>
                                    <Link href={ele.path}>
                                        <ele.icon size={25} />
                                    </Link>

                                </li>
                            )

                        })
                    }
                </ul>
            </div>
        </>


    )
}
