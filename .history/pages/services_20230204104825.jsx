import React from 'react'
import Navbar from '../Components/Navbar'
import ServiceCards from '../Components/ServiceCards'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

const services = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
          <Services/>
          <p></p>
          <ServiceCards/>
          <Footer/>
        </div>
    </div>
  )
}

export default services