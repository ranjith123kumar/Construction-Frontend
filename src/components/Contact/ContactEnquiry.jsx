import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const ContactEnquiry = () => {
  const team = [
    {
      id: 1,
      img: "/download (6).jpg",
      type: "Any Questions? Call us",
      enquiry: "+91 9876543210",
      icon: <LuPhoneCall />
    },
    {
      id: 2,
      img: "/download (6).jpg",
      type: "Any Questions? Email us",
      enquiry: "logiland@gmail.com",
      icon: <IoMailOpenOutline />
    },
    {
      id: 3,
      img: "/download (6).jpg",
      type: "51 Somestreet Cambridge",
      enquiry: "CB4 3AA, Chennai",
      icon: <FaMapMarkedAlt />
    },
  ];

  return (
    <div className="py-10 w-[90%] md:w-[80%] mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-600">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {team.map((member) => (
          <div
            key={member.id}
            className="rounded overflow-hidden shadow-lg relative group hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.img}
              alt={member.type}
              className="w-full h-72 object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">

              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md group-hover:bg-orange-600 transition-colors duration-300">
                <span className="text-3xl text-orange-600 group-hover:text-white">
                  {member.icon}
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 text-center py-3 space-y-2 z-30">
              <h1 className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
                {member.type}
              </h1>
              <p className="text-lg font-semibold">{member.enquiry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactEnquiry;
