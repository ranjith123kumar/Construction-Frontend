import React from 'react'

const LogisticSection
 = () => {
    const Card = [
        {
            id: 1,
            img: "/logistic-air.jpg",
            service: "Air Freight Service",
            text: "Long established fact that reader will be distracted by the",
        },
        {
            id: 2,
            img: "/download (4).jpg",
            service: "Truck Transport",
            text: "Safe and reliable truck transport solutions.",
        },
        {
            id: 3,
            img: "/download (5).jpg",
            service: "Ship Freight Service",
            text: "Worldwide shipping services with efficiency.",
        }
    ];

    return (
        <>
            <div className='py-10 '>
                <div className='flex flex-col items-center text-center space-y-4'>
                    <h1 className='text-lg font-medium text-orange-600'>WHAT WE DO</h1>
                    <h1 className='text-4xl font-bold'>Logistics & Transport</h1>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-[80%]'>
                        {Card.length > 0 ? (
                            Card.map((section) => (
                                <div
                                    key={section.id}
                                    className='rounded-xl overflow-hidden shadow-lg relative h-72 group'
                                >
                                    <img
                                        src={section.img}
                                        alt={section.service}
                                        className='w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110'
                                    />

                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                                    <div className='absolute inset-0 flex flex-col justify-end p-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        <h1 className='font-bold text-white group-hover:text-orange-600 text-2xl transition-colors'>
                                            {section.service}
                                        </h1>
                                        <p className='font-light text-lg text-white'>{section.text}</p>
                                        <div>
                                            <Link to="/trackorder" className="mt-3 bg-orange-600 border border-transparent hover:bg-transparent hover:border-orange-600 cursor-pointer text-white text-md hover:scale-90 font-medium px-4 py-2 rounded-lg transition duration-500">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <p className='text-gray-500'>Not found data</p>
                        )}
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default LogisticSection

