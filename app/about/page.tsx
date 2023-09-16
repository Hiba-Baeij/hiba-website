import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import AboutBtn from './components/AboutBtn'
export const metadata: Metadata = {
    title: 'About Me',
    description: 'Personal Information ,Skills, Experience and Education',
}
const educations = [
    {
        year: '2019',
        title: 'BACHELOR DEGREE',
        at: '',
        text: 'I started my studies from the primary stage all the way to middle school and high school, in which I took my bachelor’s degree with a rate of 90%, which qualified me to enter the university.'
    },
    {
        year: '2020-2021',
        title: 'ENGINEERING DEGREE',
        at: '',
        text: 'I entered the University of Aleppo in Syria, where I studied at the Faculty of Informatics Engineering, through which I started my career in programming, and I preferred the field of software engineering more.'
    },
    {
        year: '2020-2021-2022',
        title: 'WEB DEVELPOER',
        at: '',
        text: 'I started learning the field of web development through which I learned css html javascript and delved more into the front end field and started learning frameworks such as Vue and React.'
    },

]
const experiences = [

    {
        year: '2022',
        title: 'FRONTEND VUE JS DEVELOPER',
        at: 'at JetOrder',
        text: 'I Worked as Freelancer at MindTorches Company on JetOrder project Which is an project that provides customers with the service of creating their own e-commerce, and it is a project that consists of 3 applications. two control panels, a main dashboard for project management and a dashboard for the store owner, and a mobile application .'
    },
    {
        year: '2022',
        title: 'FRONTEND VUE JS DEVELOPER',
        at: 'at Elkood',
        text: 'I started in EKOOD as Vue.js jonior developer , I Worked on many projects with the team , we used technologies and libraries like Vuejs, bootstrap , vuetify , scss , Three.Js and GreenSock. I built a reusable template for the next projects that includes a lot of reusable components and functionality. I Worked on different types of projects , dashboards to manage the content of the projects , Landing Pages like Altin Sary and Root Agency website.'
    },

    {
        year: '2022-2023',
        title: 'FRONTEND NUXT JS',
        text: 'I Worked on many projects with the team ,like Qr Germany Which consists of a special site for generating codes, as well as definition sections and a dashboard and Jenacome It is a shipping company for the transportation of goods in the Netherlands Which consists of landin page and dashboard'
    },
]
const icons = [
    {
        icons: '/icons/javascript.webp',
        title: 'Javascript',
    },
    {
        icons: '/icons/css.webp',
        title: 'Css',
    },
    {
        icons: '/icons/html.webp',
        title: 'Html',
    },
    {
        icons: '/icons/bootstrap.webp',
        title: 'Bootstrap',
    },
    {
        icons: '/icons/typescript.webp',
        title: 'Typescript',
    },
    {
        icons: '/icons/react.webp',
        title: 'React Js',
    },
    {
        icons: '/icons/vue.webp',
        title: 'Vue Js',
    },
    {
        icons: '/icons/next.svg',
        title: 'Next Js',
    },
    {
        icons: '/icons/nuxt.webp',
        title: 'Nuxt Js',
    },
    {
        icons: '/icons/redux.webp',
        title: 'Redux',
    },
    {
        icons: '/icons/pinia.svg',
        title: 'Pinia',
    },
    {
        icons: '/icons/gsap.svg',
        title: 'GSAP',
    },
    {
        icons: '/icons/motion.svg',
        title: 'Framer Motion',
    },


    {
        icons: '/icons/tailwind.webp',
        title: 'Tailwind Css',
    },
    {
        icons: '/icons/material-ui.svg',
        title: 'Material Design',
    },
    {
        icons: '/icons/sass.webp',
        title: 'Sass',
    },
    {
        icons: '/icons/style.svg',
        title: 'Styled Components',
    },
    {
        icons: '/icons/vuetify.svg',
        title: 'Vuetify',
    },
    {
        icons: '/icons/vite.webp',
        title: 'Vite',
    }

]

export default function page() {

    return (

        <div className=' relative md:px-40 px-10 pb-28 md:pb-0'>
            <Image className='block md:hidden' style={{ position: 'absolute', top: "-12rem", left: '-5rem' }} width={200} height={200} src="/shapes/circles/circle-red-mobile.svg" alt="image-head" />
            <Image className='block md:hidden' style={{ position: 'absolute', top: '-6rem', right: '0rem' }} width={100} height={50} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-6rem', right: '-2rem', width: 'auto' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '3rem', left: '60%', }} width={80} height={33} src="/shapes/zigzags/zigzag-yellow.svg" alt="image-head-2" />
            <Image className='lg:block hidden ' style={{ position: 'absolute', right: '-15rem', top: '2rem' }} width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />
            <Image className='md:block hidden' style={{ position: 'absolute', top: '-10rem', left: '-4rem' }} width={200} height={200} src="/shapes/circles/circle-small-blue.svg" alt="image-head-6" />

            {/* PERSONAL INFOS */}
            <div className='grid grid-cols-2 md:mt-24 mt-14'>
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
                                <li className='opacity-60'>Phone:</li><span className='font-bold'><a href="/"> +963 967283981</a></span>
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

                    <AboutBtn />
                </div>
                <div className='md:col-span-1 col-span-2 flex lg:justify-end justify-start items-center order-1 md:order-2'>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] md:my-20 my-12'></div>
            </div>

            {/* My Skills */}
            <div>
                <h2 className='text-xl font-semibold text-center'>MY SKILLS</h2>
                <div className='flex justify-center items-center flex-wrap gap-14 md:m-14 m-2 mt-20'>
                    {
                        icons.map((ele) => {
                            return (

                                <div className='flex flex-col justify-center items-center hover:scale-125 transition-all cursor-pointer w-40'>
                                    <Image style={{ objectFit: 'contain' }} width={160} height={160} src={ele.icons} alt="icons" className='w-12 md:w-[5.6rem] h-12 md:h-[4.7rem]' />
                                    <span className='text-center opacity-50 mt-5'>{ele.title}</span>
                                </div>
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
                                    <div className={index == 1 ? 'flex justify-start items-center w-full md:my-10 my-0' : 'flex justify-start items-center w-full'}>
                                        <div className={index == 1 ? 'md:block hidden border-2 border-dashed border-white w-[20%]' : 'md:block hidden border-2 border-dashed border-white w-[60%]'}></div>
                                        <div className='border-2 border-dashed border-white rounded-xl w-[30rem]'>
                                            <article className='md:p-8 p-4'>
                                                <div className='flex justify-start flex-wrap items-center mb-3 gap-2'>

                                                    <h2 style={{
                                                        background: '-webkit-linear-gradient(45deg, #9B1096 , #FAFF0D)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }} className='font-bold text-lg uppercase'>{ed.title}</h2>
                                                    <span className='font-normal text-xs text-white bg-dark rounded-full px-2 py-1'>{ed.year}</span>
                                                </div>
                                                <p className='leading-loose tracking-wider'>{ed.text}</p>
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
                            educations.map((ed, index) => {
                                return (
                                    <div className={index == 1 ? 'flex justify-start items-center w-full md:my-10 my-0' : 'flex justify-start items-center w-full'}>
                                        <div className={index == 1 ? 'md:block hidden border-2 border-dashed border-white w-[20%]' : 'md:block hidden border-2 border-dashed border-white  w-[60%]'}></div>
                                        <div className='border-2 border-dashed border-white rounded-xl w-[30rem]'>
                                            <article className='md:p-8 p-4'>
                                                <div className='flex flex-wrap justify-start items-center mb-3 gap-2'>

                                                    <h2 style={{
                                                        background: '-webkit-linear-gradient(45deg, #0D8BFF , #6F109B)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }} className='font-bold text-lg '>{ed.title}</h2>
                                                    <span className='font-normal text-xs text-white bg-dark rounded-full px-2 py-1'>{ed.year}</span>
                                                </div>
                                                <p className='leading-loose tracking-wider'>{ed.text}</p>
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
