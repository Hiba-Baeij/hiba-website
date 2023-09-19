"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const icons = [
    {
        icons: '/icons/javascript.webp',
        title: 'Javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        icons: '/icons/css.webp',
        title: 'Css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'

    },
    {
        icons: '/icons/html.webp',
        title: 'Html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'

    },
    {
        icons: '/icons/bootstrap.webp',
        title: 'Bootstrap',
        link: 'https://getbootstrap.com'

    },
    {
        icons: '/icons/typescript.webp',
        title: 'Typescript',
        link: 'https://www.typescriptlang.org/'

    },
    {
        icons: '/icons/react.webp',
        title: 'React Js',
        link: 'https://react.dev'

    },
    {
        icons: '/icons/vue.webp',
        title: 'Vue Js',
        link: "https://vuejs.org/guide/introduction.html"
    },
    {
        icons: '/icons/next.svg',
        title: 'Next Js',
        link: "https://nextjs.org/docs"
    },
    {
        icons: '/icons/nuxt.svg',
        title: 'Nuxt Js',
        link: 'https://nuxt.com'
    },
    {
        icons: '/icons/redux.webp',
        title: 'Redux',
        link: 'https://redux.js.org'
    },
    {
        icons: '/icons/pinia.svg',
        title: 'Pinia',
        link: 'https://pinia.vuejs.org'
    },
    {
        icons: '/icons/gsap.svg',
        title: 'GSAP',
        link: 'https://greensock.com/gsap'
    },
    {
        icons: '/icons/motion.svg',
        title: 'Framer Motion',
        link: 'https://www.framer.com/motion'
    },


    {
        icons: '/icons/tailwind.webp',
        title: 'Tailwind Css',
        link: 'https://tailwindcss.com'
    },
    {
        icons: '/icons/material-ui.svg',
        title: 'Material Design',
        link: 'https://mui.com'
    },
    {
        icons: '/icons/sass.webp',
        title: 'Sass',
        link: 'https://sass-lang.com'
    },
    {
        icons: '/icons/style.svg',
        title: 'Styled Components',
        link: 'https://styled-components.com/'
    },
    {
        icons: '/icons/vuetify.svg',
        title: 'Vuetify',
        link: 'https://vuetifyjs.com/en/'
    },
    {
        icons: '/icons/vite.webp',
        title: 'Vite',
        link: 'https://vitejs.dev/'
    }

]

export default function Skills() {
    return (
        <>
            <motion.h2 className='text-xl font-semibold text-center'>MY SKILLS</motion.h2>
            <motion.div className='flex justify-center items-center flex-wrap gap-14 md:m-14 m-2 mt-20'>
                {
                    icons.map((ele) => {
                        return (
                            <a href={ele.link}>
                                <div className='flex flex-col justify-center items-center hover:scale-125 transition-all cursor-pointer w-40'>
                                    <Image style={{ objectFit: 'contain' }} width={160} height={160} src={ele.icons} alt="icons" className='w-12 md:w-[5.6rem] h-12 md:h-[4.7rem]' />
                                    <span className='text-center opacity-50 mt-5'>{ele.title}</span>
                                </div>
                            </a>
                        )
                    })
                }
            </motion.div>
        </>
    )
}
