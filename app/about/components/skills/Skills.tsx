"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useScroll } from "framer-motion"
const icons = [
    {
        icons: '/icons/javascript.webp',
        title: 'Javascript',
        delay: 0.2,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        icons: '/icons/css.webp',
        title: 'Css',
        delay: 0.4,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'

    },
    {
        icons: '/icons/html.webp',
        title: 'Html',
        delay: 0.6,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'

    },
    {
        icons: '/icons/bootstrap.webp',
        title: 'Bootstrap',
        delay: 0.8,
        link: 'https://getbootstrap.com'

    },
    {
        icons: '/icons/typescript.webp',
        title: 'Typescript',
        delay: 1,
        link: 'https://www.typescriptlang.org/'

    },
    {
        icons: '/icons/react.webp',
        title: 'React Js',
        delay: 1.2,
        link: 'https://react.dev'

    },
    {
        icons: '/icons/vue.webp',
        title: 'Vue Js',
        delay: 1.4,
        link: "https://vuejs.org/guide/introduction.html"
    },
    {
        icons: '/icons/next.svg',
        title: 'Next Js',
        delay: 1.6,
        link: "https://nextjs.org/docs"
    },
    {
        icons: '/icons/nuxt.svg',
        title: 'Nuxt Js',
        delay: 1.8,
        link: 'https://nuxt.com'
    },
    {
        icons: '/icons/redux.webp',
        title: 'Redux',
        delay: 2,
        link: 'https://redux.js.org'
    },
    {
        icons: '/icons/pinia.svg',
        title: 'Pinia',
        delay: 2.2,
        link: 'https://pinia.vuejs.org'
    },
    {
        icons: '/icons/gsap.svg',
        title: 'GSAP',
        delay: 2.4,
        link: 'https://greensock.com/gsap'
    },
    {
        icons: '/icons/motion.svg',
        title: 'Framer Motion',
        delay: 2.6,
        link: 'https://www.framer.com/motion'
    },


    {
        icons: '/icons/tailwind.webp',
        title: 'Tailwind Css',
        delay: 2.8,
        link: 'https://tailwindcss.com'
    },
    {
        icons: '/icons/material-ui.svg',
        title: 'Material Design',
        delay: 3,
        link: 'https://mui.com'
    },
    {
        icons: '/icons/sass.webp',
        title: 'Sass',
        delay: 3.2,
        link: 'https://sass-lang.com'
    },
    {
        icons: '/icons/style.svg',
        title: 'Styled Components',
        delay: 3.4,
        link: 'https://styled-components.com/'
    },
    {
        icons: '/icons/vuetify.svg',
        title: 'Vuetify',
        delay: 3.6,
        link: 'https://vuetifyjs.com/en/'
    },
    {
        icons: '/icons/vite.webp',
        title: 'Vite',
        delay: 3.8,
        link: 'https://vitejs.dev/'
    }

]

export default function Skills() {

    return (
        <>
            <motion.h2 initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='text-xl font-semibold text-center'>MY SKILLS</motion.h2>
            <div className='flex justify-center items-center flex-wrap gap-14 md:m-14 m-2 mt-20'>
                {
                    icons.map((ele) => {
                        return (
                            <motion.a initial={{ opacity: 0, x: -400 }}
                                whileInView={{ opacity: 1, x: 0 }} transition={{
                                    duration: 0.3,
                                    delay: ele.delay,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} href={ele.link} key={ele.title}>
                                <div className='flex flex-col justify-center items-center hover:scale-125 transition-all cursor-pointer w-40'>
                                    <Image style={{ objectFit: 'contain' }} width={160} height={160} src={ele.icons} alt="icons" className='w-12 md:w-[5.6rem] h-12 md:h-[4.7rem]' />
                                    <span className='text-center opacity-50 mt-5'>{ele.title}</span>
                                </div>
                            </motion.a>
                        )
                    })
                }
            </div>
        </>
    )
}
