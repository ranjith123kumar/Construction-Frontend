import React from 'react'
import { FaAward } from "react-icons/fa";
import { GrMap } from "react-icons/gr";

const AwardSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-[80%] mx-auto py-16 items-center'>
            {/* Text Section */}
            <div className='space-y-6'>
                <h1 className='text-lg font-medium text-orange-600'>TRANSPORTATION COMPANY</h1>
                <h1 className='text-4xl font-bold leading-snug'>We Provide Full Range Global Logistics</h1>
                <p className='text-justify text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, accusantium tenetur cumque qui nam laudantium.
                    Maiores nam odio ullam libero maxime sunt eius error non, aut fugiat? Enim, excepturi iusto!
                </p>

                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl flex items-center gap-3'>
                        <GrMap className='text-4xl text-orange-600' /> Worldwide Service
                    </h1>
                    <p className='w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl flex items-center gap-3'>
                        <FaAward className='text-4xl text-orange-600' /> Certificated & Award Winner
                    </h1>
                    <p className='w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            {/* Image Section */}
            <div className="p-6 relative flex justify-center md:justify-end items-end">
                {/* Main Image */}
                <img
                    src="/transport (7).jpg"
                    alt="Main Transport"
                    className="w-full md:w-3/4 h-60 md:h-[28rem] object-cover rounded-lg shadow-lg"
                />

                {/* Overlay Box */}
                <div className="rounded shadow-2xl px-4 py-6 md:py-10 absolute top-5 md:top-10 left-1/2 md:left-10 transform -translate-x-1/2 md:-translate-x-2/4 translate-y-5 bg-white/80 backdrop-blur-sm">
                    <span className="block w-16 md:w-full h-1 bg-orange-600 mb-3 rounded"></span>
                    <h1 className="text-2xl md:text-4xl font-bold text-orange-600">1,700</h1>
                    <p className="text-gray-600 text-sm md:text-base">Satisfied Client</p>
                </div>

                {/* Small Overlay Image */}
                <img
                    src="/client (1).jpg"
                    alt="Overlay Transport"
                    className="w-40 md:w-1/2 h-32 md:h-64 object-cover rounded shadow-2xl absolute bottom-0 left-1/2 md:left-10 transform -translate-x-1/2 md:-translate-x-1/4 translate-y-5"
                />
            </div>

        </div>
    )
}

export default AwardSection
