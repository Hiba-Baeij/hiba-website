import React from 'react'
import FullScreenPortfolio from './components/FullScreenPortfolio';
import MobilePortfolio from './components/MobilePortfolio';


export default function page() {
    return (
        <div className='portfolio relative md:px-40 px-10 md:pt-36 pt-24 pb-20'>

            <div className='md:grid hidden grid-cols-6 gap-16'>
                <FullScreenPortfolio />

            </div>
            <div className='grid md:hidden grid-cols-6 gap-8'>
                <MobilePortfolio />

            </div>
        </div >
    )
}
