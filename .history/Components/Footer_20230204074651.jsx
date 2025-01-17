import React from 'react'
import Link from 'next/link';

const Footer = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
        name:"Career",
        link:'/career',
    },
    {
        name:"Contact Us",
        link:"/contact"
    }
  ];
  return (
    <div className='bg-[#1C2C5E] text-white pt-8 '>
      <div className='flex md:flex-row flex-col items-center gap-y-6 md:justify-around'>

        <div className='w-2/5'>
        {
          Links.map((link)=>(
        <div className=' flex flex-col md:flex-row text-center uppercase items-center justify-center py-[0.3rem] font-semibold text-sm'key={link.name}>
        <a href={link.link} className='hover:text-[#FFCA05] class="w-full md:w-max mx-2 lg:mx-4 xl:mx-6 items-center transition-all'>{link.name}</a>
        </div>
          ))
        }
      </div>
        <img
        src='img/logo2.svg'
        alt='RHR Consol Logo'
        className='lg:w-56 w-40 justify-center'/>
      <div className='md:w-2/5'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.210001413049!2d73.03605996469643!3d19.01046578712559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3aa58401201%3A0xf0f9308bd73291f3!2sMahavir%20Icon%2C%20Sector%2015%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1675342686952!5m2!1sen!2sin" 
      width="auto" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full md:px-20 py-6'></iframe>
      </div>
      </div>
        {/* <div className="container mx-auto">
      <p className="text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} RHR Consol India Pvt. Ltd.
      </p>
    </div> */}
    <div className='w-full h-auto text-sm text-center'>
    <svg
              className="w-[10rem] lg:w-[20rem] lg:ml-14 p"
              width="auto"
              height="24"
              viewBox="0 0 262 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.988506"y1="3.50004"x2="261.988"y2="1.50004"stroke="#FFCA05"stroke-width="3"/>
            </svg>
      <span className='text-secondary' >© RHR Consol India Pvt Ltd</span>
      <br/>{" "}
      <a
      href="https://elightlabs.com/"
      target="_blank"
      rel="noopener noreferrer"
      className='text-secondary'>
        Elightlabs Technologies LLP
      </a>
    </div>
    </div>
  )
}

export default Footer