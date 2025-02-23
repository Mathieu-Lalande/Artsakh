import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Mise en relation des acteurs</p>
            <p className='text-gray-400'>Nous facilitons les échanges entre les parties prenantes pour promouvoir la paix.</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Aide au travers de projets</p>
            <p className='text-gray-400'>Nous soutenons des projets qui apportent des solutions durables aux communautés affectées.</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>L'humain avant tout</p>
            <p className='text-gray-400'>Nous priorisons les initiatives qui améliorent la qualité de vie des individus touchés par les conflits.</p>
        </div>
    </div>
  )
}

export default OurPolicy