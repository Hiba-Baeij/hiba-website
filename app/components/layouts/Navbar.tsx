"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHouse, FaUser, FaBagShopping, FaMessage, FaMoon } from "react-icons/fa6";

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
    const style = (path: string) => {
        return {
            boxShadow: pathname == path ? '0em 0em 0 0em #0F1212' : '-0.2em -0.2em 0 .05em #005BA4',
            backgroundColor: pathname == path ? "#005BA4" : "#0F1212",
        }


    };
    return (
        <>
            <div className='md:block hidden fixed right-0 top-2 z-50'>
                <ul className='flex justify-end items-center gap-8 py-5 px-20'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id} >

                                    <Link href={ele.path}
                                        style={{ fontWeight: pathname == ele.path ? 'bolder' : 'lighter', }}
                                        className=''>
                                        {ele.name}
                                    </Link>

                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className='block md:hidden fixed bottom-0 z-50 bg-[#000] shadow-2xl shadow-white w-full'>
                <ul className='flex justify-center items-center gap-12 pb-5 pt-2'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id} >
                                    <div className='rounded mb-3' style={{ borderTop: pathname == ele.path ? '4px solid #EE3E9E' : '' }}></div>

                                    <Link href={ele.path}

                                    >
                                        {/* {pathname == ele.path ? <Image className='mt-2' width={40} height={0} src="/shapes/lines/line-navbar.svg" alt="image-line" /> : null} */}
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
