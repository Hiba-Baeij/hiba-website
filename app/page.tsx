"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
// import "./styles/style.css";
import PBtn from './components/PBtn';

export default function Home() {
  const handleButtonClick = () => {
    // Handle the click event here
    console.log('Button clicked!');
  };
  return (
    <main className="home relative px-32 overflow-hidden flex justify-between items-center h-screen">

      <div>
        <Image style={{ position: 'absolute', top: 0, right: '-2rem', width: 'auto' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-1" />
        <Image style={{ position: 'absolute', top: '5rem', left: '40%' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-2" />
        <Image style={{ position: 'absolute', bottom: '72%', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-3" />
        <Image style={{ position: 'absolute', bottom: '50%', left: '20%' }} width={50} height={50} src="/shapes/circles/circle-small-yellow.svg" alt="image-head-4" />
        <Image style={{ position: 'absolute', left: '-3rem', bottom: '14rem', width: 'auto' }} width={120} height={0} src="/shapes/lines/line-purple.svg" alt="image-head-5" />
        <Image style={{ position: 'absolute', left: '32rem', bottom: '8rem' }} width={80} height={33} src="/shapes/circles/circle-small-blue.svg" alt="image-head-6" />
        <Image style={{ position: 'absolute', bottom: '-2rem', left: '2rem' }} width={120} height={120} src="/shapes/triangles/triangle-pink.svg" alt="image-head-7" />

      </div>

      <motion.div initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} className=" text-white">

        {/* <div className="px-6"> */}
        <div className="flex justify-center lg:justify-start items-center lg:items-start flex-col">
          <div className="flex justify-start items-center gap-5">
            <div className="text-5xl lg:block hidden bg-primary w-10 h-1 rounded-md mt-1"></div>
            <h2 className="text-4xl lg:text-5xl leading-tight font-bold ">I'M HIBA BAEEJ. </h2>
          </div>
          <h2 className="text-2xl lg:text-5xl leading-tight font-bold mt-3 lg:ml-16 ml-0">
            WEB DEVELOPER
          </h2>
        </div>

        <p className="w-max-[32rem] lg:w-[32rem] mt-8 leading-loose tracking-wide text-base lg:text-left text-center">Im a front‑end developer focused on crafting clean &  user‑friendly experiences, I am passionate about building excellent software  that improves the lives of those around me.</p>
        <div className="flex justify-center lg:justify-start items-center">


          {/* <PBtn className='mt-8' onClick={handleButtonClick} text='MORE ABOUT ME' icon={<FaArrowRight size={20} />}></PBtn> */}

        </div>
        {/* </div> */}
      </motion.div>


      <Image style={{ position: 'absolute', right: '-3rem', top: '30rem' }} priority width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />


    </main>
  )
}
