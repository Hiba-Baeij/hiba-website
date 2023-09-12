import Image from 'next/image'
import HeaderOne from './components/page/HeaderOne';
import HeaderTwo from './components/page/HeaderTwo';

export default function Home() {
  const handleButtonClick = () => {
    // Handle the click event here
    console.log('Button clicked!');
  };
  return (
    <main className="home relative  overflow-hidden flex justify-center items-center h-screen ">

      <Image style={{ position: 'absolute', top: 0, right: '-2rem' }} width={80} height={33} src="/shapes/zigzags/zigzag-pink.svg" alt="image-head-1" />
      <Image style={{ position: 'absolute', top: '-2rem', left: '30%' }} width={120} height={0} src="/shapes/lines/line-yellow.svg" alt="image-head-5" />
      <Image className='md:block hidden' style={{ position: 'absolute', top: '5rem', left: '50%' }} width={80} height={33} src="/shapes/zigzags/zigzag-green.svg" alt="image-head-2" />
      <Image style={{ position: 'absolute', bottom: '72%', left: '-10rem' }} priority width={400} height={400} src="/shapes/circles/circle-red.svg" alt="image-head-3" />
      <Image style={{ position: 'absolute', bottom: '-2rem', left: '2rem' }} width={120} height={120} src="/shapes/triangles/triangle-pink.svg" alt="image-head-7" />

      <div className=' grid grid-cols-2 gap-[12rem]'>
        <div className='md:col-span-1 col-span-2'>
          <HeaderOne />

        </div>
        <div className='md:col-span-1 col-span-2'>
          <HeaderTwo />

        </div>
      </div>
      <Image className='md:block hidden' style={{ position: 'absolute', right: '-3rem', top: '35rem' }} priority width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />

    </main>
  )
}
