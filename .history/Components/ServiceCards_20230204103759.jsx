import React from 'react'

const ServiceCards = () => {
    const Data = [
        {
            src: "img/nvocc.jpg",
            title: "NVOCC",
            desc:""
        },
        {
            src: "door-to-door.jpg",
            title: "Door To Door",
        },
        {
            src: 'img/impexp.jpg',
            title: "Import/Export"

        },
        {
            src: 'img/customs1.png',
            title: "Customs Broker",

        },
        {
            src: 'img/ODC.png',
            title: "ODC Shipment"

        },
        {
            src: 'img/agency.png',
            title: "Custom House Agency"

        },
        {
            src: 'img/frieght.jpg',
            title: "Air Cargo"

        },


    ]
    return (
        <div>
            <div className='items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-10 gap-y-10 lg:gap-x-14 place-items-center'>
                    {
                        Data.map((d) => (
                            <div className='bg-secondary rounded-2xl w-full'>
                                <div className='lg:h-32 self-center rounded-lg flex' key={d.title}>
                                    <img
                                        src={d.src}
                                        className='object-cover h-32 md:w-48 rounded-xl' />
                                    <div className=' mt-1 px-5'>
                                        <p className='text-lg font-semibold text-primary uppercase'>{d.title}</p>
                                        <p className='text-white'>
                                            hello 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceCards