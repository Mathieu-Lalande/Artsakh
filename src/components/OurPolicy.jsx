import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Promoting Global Peace</p>
            <p className='text-gray-400'>We support initiatives that promote peace worldwide</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Humanitarian Aid</p>
            <p className='text-gray-400'>We provide aid to communities affected by conflict</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Educational Programs</p>
            <p className='text-gray-400'>We support educational programs for peace and conflict resolution</p>
        </div>
    </div>
  )
}

export default OurPolicy