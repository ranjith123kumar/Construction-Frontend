import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPlus } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Mail from "/download (6).jpg";

const Footer = () => {
  return (
    <footer className="w-full relative mt-20">
      <div className="absolute -top-16 left-0  w-[90%] md:w-[80%] bg-orange-600 rounded-r-lg shadow-xl 
                      flex flex-col md:flex-row items-center justify-between gap-4 text-white p-6 z-30">
        <img className="w-14 md:w-20" src={Mail} alt="Mail send" />

        <h1 className="font-bold text-xl md:text-3xl text-center md:text-left flex-1">
          Subscribe Our Newsletter
        </h1>

        <div className="flex w-full md:w-auto gap-2">
          <input
            className="flex-1 bg-white text-black px-4 py-2 rounded focus:outline-none"
            type="email"
            placeholder="Email Address"
          />
          <button className="bg-black px-4 md:px-6 py-2 rounded font-bold hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </div>


      <section
        className="relative text-white pt-22"
        style={{
          backgroundImage: "url('/download (6).jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>


        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:px-20  z-10">

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              LOGI<span className="text-orange-600">LAND</span>
            </h1>
            <p className="py-4 leading-relaxed text-sm">
              A farm is a plot of land that is used to grow crops and raise
              livestock, as in our farm, we raise sheep and sell their wool.
            </p>
            <div className="flex gap-3 text-2xl md:text-3xl">
              <FaFacebookF className="bg-white p-2 rounded text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300" />
              <LuInstagram className="bg-white p-2 rounded text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300" />
              <BsTwitterX className="bg-white p-2 rounded text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300" />
              <FaLinkedinIn className="bg-white p-2 rounded text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold pb-3">Our Services</h1>
            {[
              "Warehouse Air",
              "Freight Ocean",
              "Freight Road",
              "Freight Freight",
              "Supply Chain",
              "Packaging",
            ].map((service, i) => (
              <p key={i} className="flex items-center py-1 text-sm">
                <FaPlus className="me-2" /> {service}
              </p>
            ))}
          </div>

          {/* Links */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold pb-3">Useful Links</h1>
            {[
              "News & Media",
              "Sustainability",
              "About Expertise",
              "Case Studies",
              "Our Team",
              "Contacts",
            ].map((link, i) => (
              <p key={i} className="flex items-center py-1 text-sm">
                <FaPlus className="me-2" /> {link}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h1 className="font-bold text-xl md:text-2xl pb-3">Contact Info</h1>
            <p className="flex items-center py-2 text-sm">
              <IoLocationOutline className="text-3xl md:text-4xl text-orange-600 bg-white hover:text-white hover:bg-orange-600 rounded-full p-2 me-3 transition duration-300" />
              Egmore, Chennai.
            </p>
            <p className="flex items-center py-2 text-sm">
              <IoCallOutline className="text-3xl md:text-4xl text-orange-600 bg-white hover:text-white hover:bg-orange-600 rounded-full p-2 me-3 transition duration-300" />
              +91 9042696983
            </p>
            <p className="flex items-center py-2 text-sm">
              <CgMail className="text-3xl md:text-4xl text-orange-600 bg-white hover:text-white hover:bg-orange-600 rounded-full p-2 me-3 transition duration-300" />
              whytap@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 bg-indigo-950 bg-opacity-60 text-xs md:text-sm z-10">
          <p className="text-center md:text-left">
            © 2025 ThemeJunction. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <p>Setting & Privacy</p>
            <p>Faqs</p>
            <p>Support</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
