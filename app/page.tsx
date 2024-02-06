import HeaderOne from './components/page/home/HeaderOne';
import HeaderTwo from './components/page/home/HeaderTwo';

import StarsField from './components/page/home/StarsField';

export default function Home() {
  return (
    <section className="home relative overflow-hidden flex justify-center items-center h-screen">

      <div className='grid grid-cols-2 mt-4 absolute z-30 w-full'>
        <div className='md:col-span-1 col-span-2 flex justify-center items-center'>
          <HeaderOne />

        </div>
        <div className='md:col-span-1 col-span-2'>
          <HeaderTwo />

        </div>
      </div>
      <StarsField />
    </section>
  )
}
