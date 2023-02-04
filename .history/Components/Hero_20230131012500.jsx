import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero2.png'
        className=' relative w-full h-auto lg:h-max'/>
        <div className='absolute top-10 ml-10 text-4xl'>
        <p className='font-mulish font-extrabold text-4xl'>FAST,<span className='text-[#FFCA05]'>RELIABLE</span></p>
        <p className='text-6'>TRANSPORTATION.</p>
        </div>
        </div>
    </div>
  )
}

export default Hero