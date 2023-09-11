import Image from 'next/image'
import Header from './components/page/Header';

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

      <Header />
      <Image style={{ position: 'absolute', right: '-3rem', top: '30rem' }} priority width={400} height={400} src="/shapes/circles/circle-blue.svg" alt="image-head-8" />
    </main>
  )
}
