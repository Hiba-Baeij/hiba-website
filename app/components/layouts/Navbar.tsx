"use client"

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
        <div>
            <div>
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
            {/* <div className='shadow-shap z-40 fixed top-6 right-6 bg-dark  w-12 h-12 rounded-full flex justify-center items-center'>
                <Link href='/'><FaMoon size={25} /></Link>
            </div>
            <div className='z-50 fixed right-2 top-1/3 w-20 hidden md:flex justify-center items-center'>
                <ul className='text-white flex justify-center items-center flex-col gap-6 relative'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id} >

                                    <Link href={ele.path}
                                        style={style(ele.path)}
                                        className='w-12 h-12 rounded-full flex justify-center items-center'>
                                        <ele.icon size={20} />
                                    </Link>

                                </li>
                            )

                        })
                    }
                </ul>
            </div> */}
        </div>
    )
}
