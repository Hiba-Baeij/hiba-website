import React from 'react'
import AnimationGroupImage from './components/AnimationGroupImage';
import FullScreenPortfolio from './components/FullScreenPortfolio';
import MobilePortfolio from './components/MobilePortfolio';


export default function page() {
    return (
        <div className='portfolio relative md:px-40 px-10 md:mt-48 mt-24 mb-20'>

            <AnimationGroupImage />
            <div className='md:grid hidden grid-cols-6 gap-8'>
                <FullScreenPortfolio />

            </div>
            <div className='grid md:hidden grid-cols-6 gap-8'>
                <MobilePortfolio />

            </div>
        </div >
    )
}
