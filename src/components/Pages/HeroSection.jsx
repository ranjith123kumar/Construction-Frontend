import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative min-w-full h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          'url("/programming-background-with-person-working-with-codes-computer.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative flex flex-col justify-center h-full px-6 md:px-20 text-white space-y-6 text-left">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold leading-snug max-w-2xl"
        >
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Flexible Transport
          </span>{" "}
          & Logistics Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm md:text-base font-light max-w-md text-gray-200 leading-relaxed"
        >
          Explain to you all this mistaken denouncing pleasure and praising pain
          was born and we will give you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative group bg-orange-600 border border-transparent hover:border-orange-600 
                     text-white text-base font-medium px-6 py-2 rounded-lg 
                     transition duration-300 shadow-md hover:shadow-orange-500/40 overflow-hidden w-fit"
        >
          <span className="relative z-10 group-hover:text-orange-600">
            Read More
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown
          size={36}
          className="animate-bounce opacity-90 cursor-pointer drop-shadow-lg hover:opacity-100 hover:scale-110 transition-transform"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
