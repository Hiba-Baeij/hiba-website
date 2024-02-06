"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaHouse, FaUser, FaBagShopping, FaMessage, FaMoon, FaTelegram, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { NavbarContent, NavbarItem, Navbar, Button } from '@nextui-org/react';
import { IoHeart } from "react-icons/io5";
import { socialMedia } from '@/data/socialMedia';

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

export default function NavbarList() {
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
        <Navbar isBordered={!isTop} isBlurred className='bg-transparent fixed w-full'>
            <NavbarContent justify="start">

                {
                    links.map((link) => (
                        <NavbarItem key={link.id} isActive={pathname === link.path}>
                            <Link color="foreground" aria-current="page" href={link.path}>
                                {link.name}
                            </Link>
                        </NavbarItem>

                    ))
                }

            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem className="hidden lg:flex text-gray-300 opacity-80">
                    {
                        socialMedia.map((media) => (
                            <Link key={media.id} href={media.path} className='px-2'><media.icon size={20} /></Link>
                        ))
                    }
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button className='bg-transparent text-light bg-zinc-800' variant='solid' size='sm' startContent={
                        <svg aria-hidden="true" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" className="text-danger"><path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                    }>
                        Thx For visit
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}
