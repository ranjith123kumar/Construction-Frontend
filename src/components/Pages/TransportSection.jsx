import React, { useState, useEffect } from "react";

const TransportSection = () => {
    const team = [
        { id: 1, img: "/transport (13).jpg", name: "Logistics", position: "Road Freight Solution" },
        { id: 2, img: "/transport (11).jpg", name: "Logistics", position: "Air Freight Solution" },
        { id: 3, img: "/transport (12).jpg", name: "Logistics", position: "Ship Freight Solution" },
        { id: 4, img: "/transport (7).jpg", name: "Logistics", position: "Transport Solution" },
        { id: 5, img: "/transport (10).jpg", name: "Logistics", position: "Warehouse Solution" },
        { id: 6, img: "/transport (9).jpg", name: "Logistics", position: "Cargo Handling" },
        { id: 7, img: "/transport (1).jpg", name: "Logistics", position: "Courier Delivery" },
        { id: 8, img: "/transport (8).jpg", name: "Logistics", position: "Express Transport" },
        { id: 9, img: "/transport (13).jpg", name: "Logistics", position: "Road Freight Solution" },
        { id: 10, img: "/transport (11).jpg", name: "Logistics", position: "Air Freight Solution" },
        { id: 11, img: "/transport (12).jpg", name: "Logistics", position: "Ship Freight Solution" },
        { id: 12, img: "/transport (7).jpg", name: "Logistics", position: "Transport Solution" },
    ];

    const [current, setCurrent] = useState(0);
    const itemsPerPage = 4;
    const totalSlides = Math.ceil(team.length / itemsPerPage);

    return (
        <div className="w-full relative">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-[2000ms] ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-shrink-0 w-full"
                        >
                            {team
                                .slice(
                                    slideIndex * itemsPerPage,
                                    slideIndex * itemsPerPage + itemsPerPage
                                )
                                .map((member) => (
                                    <div
                                        key={member.id}
                                        className="rounded-lg border border-gray-200 overflow-hidden shadow-lg relative group"
                                    >
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-[22rem] object-cover group-hover:opacity-70 transition-opacity duration-500"
                                        />

                                        <div className="absolute bottom-0 left-0 w-[70%] bg-white p-4 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                            <h1 className="text-lg font-bold text-orange-600">{member.name}</h1>
                                            <p className="text-sm font-medium text-white bg-orange-600 px-4 py-2">
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition ${current === index ? "bg-orange-600" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TransportSection;
