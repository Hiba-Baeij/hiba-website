import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import "../styles/style.css"
import DownloadCv from './components/DownloadCv'
import PhoneNumberCopy from './components/PhoneNumberCopy'
export const metadata: Metadata = {
    title: 'About Me',
    description: 'Personal Information ,Skills, Experience and Education',
}
const educations = [
    {
        year: '2019',
        title: 'BACHELOR DEGREE',
        at: '',
        text: 'I began my educational journey in elementary school, then advanced to middle school, and ultimately graduated from high school with a 92% grade, which enabled me to gain admission to university.'
    },
    {
        year: '2019-2023',
        title: 'ENGINEERING DEGREE',
        at: '',
        text: 'I was admitted to Aleppo Syrian University to pursue a degree in Information Technology, with a specialization in the Software Engineering department. During my fourth year, I earned a 95% grade on a Software Engineering project that was both challenging and enjoyable and now I am in my graduation year.'
    },
    {
        year: '2020-2021-2022',
        title: 'WEB DEVELPOER',
        at: '',
        text: 'I developed an interest in the field of web development and chose to specialize in frontend, which is a vast domain brimming with numerous intriguing technologies. I started by learning the basics and then proceeded to explore frameworks such as React.Js, Vue.Js, Next.Js, and Nuxt.JS.'
    },

]
const experiences = [

    {
        year: '2022 - 2023',
        title: 'FRONTEND VUE JS DEVELOPER',
        at: 'Elkood',
        location: 'Syria - Aleppo',
        text: 'I began my journey at The ELKOOD Company as a novice, where I received training and qualifications. From there, I entered the field and collaborated on multiple projects using various technologies and templates. I also enhanced the themes we employed, leveraging frameworks like Vue.js and Next.js. You can find these projects in my portfolio'
    },
    {
        year: '2022',
        title: 'FRONTEND VUE JS DEVELOPER',
        at: 'JetOrder',
        location: 'Irbid - Jordan',
        text: 'I Worked as Freelancer at MindTorches Company on JetOrder project Which is an project that provides customers with the service of creating their own e-commerce, and it is a project that consists of 3 applications. two control panels, a main dashboard for project management and a dashboard for the store owner, and a mobile application .'
    },

    {
        year: '2022-2023',
        title: 'FRONTEND REACT JS DEVELOPER',
        at: '',
        location: '',
        text: 'I was attracted to React and decided to delve deeper into it due to its popularity. I have been working with React for a year on diverse projects, and I now aspire to apply my expertise within a specific company, as I have fully dedicated myself to it. I developed my website using Next.js and contributed to various projects, including a delivery order project.'
    },
]
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

export default function page() {

    return (

        <div className='about relative md:px-40 px-10 pb-28 md:pb-20'>
            <Image className='block md:hidden' style={{ position: 'absolute', top: "-12rem", left: '-5rem' }} width={200} height={200} src="/shapes/circles/circle-red-mobile.svg" alt="image-head" />
            <Image className='block md:hidden' style={{ position: 'absolute', top: '-6rem', right: '0rem' }} width={100} height={50} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-6rem', right: '-2rem', width: 'auto' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '3rem', left: '60%', }} width={80} height={33} src="/shapes/zigzags/zigzag-yellow.svg" alt="image-head-2" />
            <Image className='lg:block hidden ' style={{ position: 'absolute', right: '-15rem', top: '2rem' }} width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-4rem', left: '-4rem' }} width={200} height={200} src="/shapes/circles/circle-small-blue.svg" alt="image-head-6" />

            {/* PERSONAL INFOS */}
            <div className='personal-info mt-20 md:mt-0'>

                <div className='grid grid-cols-2'>
                    <div className='md:col-span-1 col-span-2 md:order-1 order-2 mt-8 md:mt-0'>
                        <h2 className='text-xl font-semibold'>PERSONAL INFOS</h2>
                        <div className='flex w-full mt-12 gap-10 mb-10 flex-wrap'>
                            <ul>
                                <div className='flex justify-start items-center gap-3'>
                                    <li className='opacity-60'>First Name:</li><span className='font-bold'>Hiba</span>
                                </div>
                                <div className='flex justify-start items-center gap-3 mt-8'>
                                    <li className='opacity-60'>Age :</li>  <span className='font-bold'>22 Years</span>
                                </div>
                                <div className='flex justify-start items-center gap-3 mt-8'>
                                    <li className='opacity-60'>Phone:</li><PhoneNumberCopy />
                                </div>
                                <div className='flex justify-start items-center gap-3 mt-8'>
                                    <li className='opacity-60'>Languages:</li><span className='font-bold'> Arabic (native),English</span>
                                </div>
                            </ul>
                            <ul>
                                <div className='flex justify-start items-center gap-3'>
                                    <li className='opacity-60'>Last Name:</li><span className='font-bold'> Baeej</span>
                                </div>
                                <div className='flex justify-start items-center gap-3 mt-8'>
                                    <li className='opacity-60'>Nationaluty: </li><span className='font-bold'>Syria</span>
                                </div>
                                <div className='flex justify-start items-center gap-3 mt-8'>
                                    <li className='opacity-60'>Email: </li><span className='font-bold'><a target="_blank" rel="link-cv" href="https://mail.google.com/mail/u/0/"> hibabeiaj@gmail.com</a></span>
                                </div>
                                <div className='flex justify-start items-center gap-3 mt-8'>
                                    <li className='opacity-60'>Birthday:</li><span className='font-bold'> 10 july 2001</span>
                                </div>
                            </ul>
                        </div>

                        <DownloadCv />
                    </div>
                    <div className='md:col-span-1 col-span-2 flex lg:justify-end justify-start items-center order-1 md:order-2'>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:mb-20 mb-12 mt-20 md:mt-0'></div>
            </div>

            {/* My Skills */}
            <div>
                <h2 className='text-xl font-semibold text-center'>MY SKILLS</h2>
                <div className='flex justify-center items-center flex-wrap gap-14 md:m-14 m-2 mt-20'>
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
                </div>

            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:my-20 my-12'></div>
            </div>
            {/* EXPERIENCE & EDUCATION */}
            <div className='mt-10'>
                <h2 className='text-xl font-semibold text-center'>EXPERIENCE & EDUCATION</h2>
                {/* EDUCATION */}
                <div className='flex justify-start items-center md:mt-32 mt-10'>
                    <Image className='md:block hidden' width={100} height={200} src="/shapes/rectangular/education.svg" alt="image-head-2" />
                    <div className='w-full'>
                        {
                            educations.map((ed, index) => {
                                return (
                                    <div className={index == 1 ? 'flex justify-start items-center w-full my-10' : 'flex justify-start items-center w-full'}>
                                        <div className={index == 1 ? 'md:block hidden border-2 border-dashed border-white w-[20%]' : 'md:block hidden border-2 border-dashed border-white w-[60%]'}></div>
                                        <div className='h-[300px] md:py-6 md:pl-6 md:pr-4 p-4 border-2 border-dashed border-white rounded-xl w-[30rem]'>
                                            <div className='flex flex-wrap justify-start items-center mb-3 gap-2'>
                                                <h2 style={{
                                                    background: '-webkit-linear-gradient(45deg, #9B1096 , #FAFF0D)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                }} className='font-bold text-lg uppercase'>{ed.title}</h2>
                                                <span className='font-normal text-xs text-white bg-dark rounded-full px-2 py-1'>{ed.year}</span>
                                            </div>
                                            <article className='h-[200px] overflow-y-scroll'>
                                                <p style={{ lineHeight: 2.8 }} className='tracking-wider'>{ed.text}</p>
                                            </article>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
                {/* EXPERIENCE */}
                <div className='flex justify-start items-center md:mt-32 mt-10'>
                    <Image className='md:block hidden' width={100} height={200} src="/shapes/rectangular/experience.svg" alt="image-head-2" />
                    <div className='w-full'>
                        {
                            experiences.map((ex, index) => {
                                return (

                                    <div className={index == 1 ? 'flex justify-start items-center w-full my-10' : 'flex justify-start items-center w-full'}>
                                        <div className={index == 1 ? 'md:block hidden border-2 border-dashed border-white w-[20%]' : 'md:block hidden border-2 border-dashed border-white w-[60%]'}></div>
                                        <div className='h-[350px] md:py-6 md:pl-6 md:pr-4 p-4 border-2 border-dashed border-white rounded-xl w-[30rem]'>
                                            <div className='flex flex-wrap justify-start flex-col items-start mb-3 gap-2'>
                                                <div className='flex flex-wrap justify-start gap-6'>

                                                    <h2 style={{
                                                        background: '-webkit-linear-gradient(45deg, #0D8BFF , #6F109B)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }} className='font-bold text-lg '>{ex.title}</h2>
                                                </div>
                                                <div className='flex flex-wrap justify-start gap-6'>
                                                    {
                                                        ex.at && ex.location ?
                                                            <>
                                                                <span>{ex.at}</span>
                                                                <span>{ex.location}</span>
                                                            </> : null
                                                    }
                                                    <span className='font-normal text-xs text-white bg-dark rounded-full px-2 py-1'>{ex.year}</span>
                                                </div>
                                            </div>
                                            <article className='h-[200px] overflow-y-scroll'>
                                                <p style={{ lineHeight: 2.8 }} className='tracking-wider'>{ex.text}</p>
                                            </article>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>

            </div>

        </div >
    )
}
