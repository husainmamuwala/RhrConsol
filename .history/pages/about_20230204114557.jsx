import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const about = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=''>
        <div>
          <h1>About Us</h1>
          <p>Team Leader Leads the various segment of Logistics which are Sea Cargo Consolidation for export and Import. Team Leader is a young and dynamic outfit headed by a vibrant and an ambitious management team with good experience of many years in the field of shipping & logistics.
            Team Leader formed with the intention to provide value added solutions to the industry stuck in the labyrinth of international trade and logistics. We understand the need of the industry and through our consolidation services strive to ensure direct connectivity to major ports in the world thus ensuring minimum transit times, minimum re-handling at transhipment points and obviously provide the cheapest rates in the process.

            We believe strongly in quality initiatives to constantly enhance our service levels and achieve customer delight. Team Leader with its professionalism and deep-rooted command in the logistics business strives every day, every minute to provide not  just quality service but something exceptional altogether.</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default about