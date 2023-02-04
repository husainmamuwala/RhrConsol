import React from 'react'

const About = () => {
    const Data=[
        {
            src:"img/nvocc.jpg",
            title:"NVOCC",
        },
        {
            src:"door-to-door.jpg",
            title:"Door To Door",
        },
        {
            src:'door-to-door.jpg',
            title:"Import/Export"

        },
        {
            src:'door-to-door.jpg',
            title:"Import/Export"

        },


    ]
    return (
        <div className='px-10 flex lg:flex-row flex-col mt-10 '>
            <div className='lg:w-3/5 relative'>
                <p className='font-semibold text-4xl tracking-wide'>Why Choose</p>
                <p className='font-semibold text-4xl tracking-wide'>RHR Consol ??</p>
                <img
                    src='img/whychoosesvg.svg'
                    alt=''
                    className='absolute top-5' />
                <div className='mt-6'>
                    <p className='text-lg text-left leading-7'>
                        RHR Consol Leads the various segment of Logistics which are Sea Cargo Consolidation for export and Import.
                        RHR Consol is a young and dynamic outfit headed by a vibrant and an ambitious management team with good experience
                        of many years in the field of shipping & logistics. RHR Consol formed with the intention to provide value added solutions
                        to the industry stuck in the labyrinth of international trade and logistics. We understand the need of the industry and through
                        our consolidation services strive to ensure direct connectivity to major ports in the world thus ensuring minimum transit times,
                        minimum re-handling at transhipment points and obviously provide the cheapest rates in the process. We believe strongly in quality
                        initiatives to constantly enhance our service levels and achieve customer delight. Team Leader with its professionalism and
                        deep-rooted command in the logistics
                        business strives every day, every minute to provide not just quality service but something exceptional altogether.
                    </p>
                </div>
            </div>
            <div className='lg:w-2/3'>
                <div className='grid  grid-cols-2 md:grid-cols-3 py-10 md:px-10'>
                    {
                        Data.map((d)=>(
                        <div className='lg:h-32 lg:w-48 w-32 pr-2 self-center rounded-lg'>
                        <img
                        src={d.src}
                        className='object-cover h-32 rounded-lg'/>
                        <p className='text-lg font-semibold'>{d.title}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About