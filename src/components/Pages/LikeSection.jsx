import React from 'react'

const LikeSection = () => {
  return (
   <div className='flex flex-col md:flex-row justify-between bg-indigo-950 items-center mt-5 '>
                <img
                    src="/wallpaper2.jpg"
                    alt="transport service"
                    className='w-full md:w-1/4 h-56 object-cover'
                />
                <div className='w-full md:w-2/4 space-y-5 text-white px-4 md:px-8 text-center md:text-left'>
                    <h2 className='font-bold text-3xl md:text-4xl leading-snug'>
                        Would you Like to get The Best Transport Services?
                    </h2>
                    <p className='font-normal text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className='mt-6 p-10 md:mt-0'>
                    <button className="bg-orange-600 border border-transparent hover:bg-transparent hover:border-orange-600 cursor-pointer text-white text-md hover:scale-105 font-medium px-6 py-3 rounded-lg transition duration-500">
                        Read More
                    </button>
                </div>
            </div>
  )
}

export default LikeSection