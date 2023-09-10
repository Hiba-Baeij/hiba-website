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

        <div className='fixed right-0 top-2 z-50'>
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

    )
}
