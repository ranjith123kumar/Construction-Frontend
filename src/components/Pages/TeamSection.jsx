import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const TeamSection = () => {
    const team = [
        {
            id: 1,
            img: "/download (6).jpg",
            name: "Kevin",
            position: "Co Founder",
        },
        {
            id: 2,
            img: "/download (6).jpg",
            name: "David Cooper",
            position: "Consultant",
        },
        {
            id: 3,
            img: "/download (6).jpg",
            name: "Martin",
            position: "Co Founder",
        },
    ];

    return (
        <div className="py-10 w-[90%] md:w-[80%] mx-auto">
            <div className="text-center">
                <h1 className="text-lg font-medium text-orange-600">OUR WORKERS</h1>
                <h1 className="text-4xl font-bold leading-snug">Our Delivery Teams</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                {team.map((member) => (
                    <div
                        key={member.id}
                        className="rounded-xl overflow-hidden shadow-lg relative group"
                    >

                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-72 object-cover"
                        />

                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>

                        <div className="absolute inset-0 flex items-center justify-center gap-4 text-xl
                        opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500 ease-in-out z-20">
                            <FaFacebookF className="p-2 text-4xl rounded-full text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition" />
                            <LuInstagram className="p-2 text-4xl rounded-full text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition" />
                            <BsTwitterX className="p-2 text-4xl rounded-full text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition" />
                            <FaLinkedinIn className="p-2 text-4xl rounded-full text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition" />
                        </div>

                        <div className="absolute bottom-0 w-full bg-white bg-opacity-90 text-center py-3 z-30">
                            <Link to="/teams" className="text-lg font-bold group-hover:text-orange-600">{member.name}</Link>
                            <p className="text-gray-500 text-sm">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
