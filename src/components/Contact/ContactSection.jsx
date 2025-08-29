
const ContactSection = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Need Any Help?  
            <span className="block text-orange-600">Get in Touch With Us</span>
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400" />
              <input type="text" placeholder="Last Name" className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Phone" className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400" />
              <input type="email" placeholder="Email Address" className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400" />
            </div>
            <input type="text" placeholder="Subject" className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400" />
            <textarea placeholder="Message" className="border rounded-lg px-4 py-2 w-full h-28 focus:ring-2 focus:ring-red-400"></textarea>
            <button
              className="px-6 py-3 bg-orange-600 border text-white rounded-xl shadow-md hover:bg-white hover:text-orange-600 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
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
    </div>
    </>
  );
}


export default ContactSection;

