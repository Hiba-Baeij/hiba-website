import React from 'react'
import PBtn from '../components/PBtn'
import '../styles/style.css'
import { FaDownload, FaBagShopping } from "react-icons/fa6"
const careers = [
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
        title: 'Style Component',
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
    const handleButtonClick = () => {
        // Handle the click event here
        console.log('Button clicked!');
    };
    return (
        <div className='about relative h-screen px-40'>
            <div className='flex justify-center items-center w-full mt-10'>
                <h2 className='uppercase mt-14 text-4xl tracking-wider font-black'>About <span className='text-primary'>Me</span> </h2>
            </div>
            {/* PERSONAL INFOS */}
            <div className='grid grid-cols-2 lg:mt-28 mt-48'>
                <div className='lg:col-span-1 col-span-2 md:order-1 order-2 mt-8 md:mt-0'>
                    <h2 className='text-xl font-semibold'>PERSONAL INFOS</h2>
                    <div className='col-span-6 flex w-full mt-12 gap-10'>
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
                                <li className='opacity-60'>Email: </li><span className='font-bold'><a href="/"> hibabeiaj@gmail.com</a></span>
                            </div>
                            <div className='flex justify-start items-center gap-3 mt-8'>
                                <li className='opacity-60'>Birthday:</li><span className='font-bold'> 10 july 2001</span>
                            </div>
                        </ul>
                    </div>
                    <PBtn className='mt-12' onClick={handleButtonClick} text='Download CV' icon={<FaDownload size={20} />}></PBtn>


                </div>
                <div className='lg:col-span-1 col-span-2 flex lg:justify-end justify-start items-center order-1 md:order-2'>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] my-20'></div>
            </div>

            {/* My Skills */}
            <div>
                <h2 className='text-xl font-semibold text-center'>MY SKILLS</h2>
                <div className='grid grid-cols-5 gap-10 m-14'>
                    {
                        icons.map((ele) => {
                            return (

                                <div className='col-span-5 md:col-span-1'>
                                    <div className='flex flex-col justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                                        <img src={ele.icons} alt="icons" className='w-12 md:w-[5.6rem] h-12 md:h-[4.7rem]' />
                                        <span className='text-center opacity-50 mt-5'>{ele.title}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] opacity-5 bg-white w-[30rem] my-20'></div>
            </div>
            {/* EXPERIENCE & EDUCATION */}
            <div className='mt-10'>
                <h2 className='text-xl font-semibold text-center'>EXPERIENCE & EDUCATION</h2>
                <div className='grid grid-cols-2 gap-10 mt-12'>
                    {
                        careers.map(ele => {
                            return (
                                <ul className="md:col-span-1 col-span-2">

                                    <li>
                                        <div className='flex justify-start items-start gap-5'>
                                            <div className=" flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                                <FaBagShopping size={20} />
                                            </div>
                                            <div>
                                                <div className="bg-dark rounded-full max-w-max px-2 mb-1"><span className='text-gray-300 font-semibold' style={{ fontSize: '12px' }}>{ele.year}</span></div>
                                                <div className='flex justify-start items-center gap-4'>
                                                    <h3 className='text-sm tracking-wider font-bold mt-2 mb-2 text-gray-200'>{ele.title}</h3> <span className='text-primary  font-bold'>{ele.at}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='pl-16 text-sm tracking-wide leading-6'>{ele.text}</p>

                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
