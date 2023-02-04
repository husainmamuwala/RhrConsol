import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero1.png'
        className=' relative w-full bg-contain h-[20rem] lg:h-auto object-cover'/>

        <div className='z-10 absolute lg:top-1 top-0 ml-10 lg:mt-1/2 mt-12'>
        <p className='font-semibold lg:text-6xl text-3xl tracking-wide text-white ml-0'>FAST,<span className='text-[#FFCA05] tracking-wide'>RELIABLE</span></p>
        <p className='text-3xl lg:text-6xl tracking-wide text-white font-medium'>TRANSPORTATION.</p>
        <p className='text-white mt-2 ml-2'>TRUCKING | SHiPPING | AIR TRANSPORT</p>
        <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.3rem] text-[#1C2C5E] font-mulish font-semibold lg:w-48 text-md
        drop-shadow-lg hover:scale-105 mt-10">
                Explore More
            </button>
        </div>
        </div>
    </div>
  )
}

export default Hero