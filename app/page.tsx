import HeaderOne from './components/page/home/HeaderOne';
import HeaderTwo from './components/page/home/HeaderTwo';
import AnimationGroupImage from './components/page/home/AnimationGroupImage';
import AnimationImage from './components/page/home/AnimationImage';

export default function Home() {
  return (
    <main className="home relative overflow-hidden flex justify-center items-center h-screen px-0 md:px-8">

      <AnimationGroupImage />
      <div className=' grid grid-cols-2 lg:gap-[12rem] md:gap-3 mt-4'>
        <div className='md:col-span-1 col-span-2'>
          <HeaderOne />

        </div>
        <div className='md:col-span-1 col-span-2'>
          <HeaderTwo />

        </div>
      </div>
      <AnimationImage />
    </main>
  )
}
