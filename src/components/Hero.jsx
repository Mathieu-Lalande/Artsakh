import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-semibold text-sm md:text-base'>PLATFORME NUMERIQUE</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-3xl leading-relaxed'>en soutien aux déplacés artsakhiotes</h1>
                <div className='flex flex-col items-end gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Right */}
        <img src={assets.hero_image} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero