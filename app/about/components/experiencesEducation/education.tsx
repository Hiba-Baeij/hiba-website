import Image from 'next/image'
import React from 'react'
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

export default function education() {
    return (
        <>
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

        </>
    )
}
