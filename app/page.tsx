"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import PBtn from './components/PBtn';

export default function Home() {
  const handleButtonClick = () => {
    // Handle the click event here
    console.log('Button clicked!');
  };
  return (
    <main className="home relative h-screen">
      <div className="grid grid-cols-2 h-full">

        <div className="lg:col-span-1 col-span-2 flex justify-center items-center">
          <Image priority width={600} height={600} src="/dashboard.svg" alt="image-head" />
        </div>

        <motion.div initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }} className="lg:col-span-1 col-span-2 text-white flex justify-start items-center z-40">

          <div className="px-6">
            <div className="flex justify-center lg:justify-start items-center lg:items-start flex-col">
              <div className="flex justify-start items-center gap-5">
                <div className="text-5xl lg:block hidden bg-primary w-10 h-1 rounded-md mt-1"></div>
                <h2 className="text-4xl lg:text-5xl leading-tight font-bold text-primary">I'M HIBA BAEEJ. </h2>
              </div>
              <h2 className="text-2xl lg:text-5xl leading-tight font-bold mt-3 lg:ml-16 ml-0">
                WEB DEVELOPER
              </h2>
            </div>

            <p className="w-max-[32rem] lg:w-[32rem] mt-8 leading-loose tracking-wide text-base lg:text-left text-center">Im a front‑end developer focused on crafting clean &  user‑friendly experiences, I am passionate about building excellent software  that improves the lives of those around me.</p>
            <div className="flex justify-center lg:justify-start items-center">


              <PBtn className='mt-8' onClick={handleButtonClick} text='MORE ABOUT ME' icon={<FaArrowRight size={20} />}></PBtn>

            </div>
          </div>
        </motion.div>

      </div>

    </main>
  )
}
