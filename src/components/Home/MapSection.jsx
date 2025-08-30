import React from 'react'

const MapSection = () => {
  return (
    <div className='py-5 w-full'>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.564456792983!2d79.48299117479566!3d11.73869828846419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5498cf9ebd879f%3A0xf23c26cd3b2de8b5!2sKoliyanur%2C%20Tamil%20Nadu%20605103!5e0!3m2!1sen!2sin!4v1720256400000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  )
}

export default MapSection