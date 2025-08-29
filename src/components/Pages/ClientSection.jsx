import React from "react";
import { FaStar } from "react-icons/fa";

const ClientSection = () => {
  const Card = [
    {
      id: 1,
      img: "/download (6).jpg",
      name: "Kimberly Hansen",
      position: "Manager",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit assumenda explicabo tempora molestias fuga excepturi, reiciendis expedita aut, dicta repellendus odio accusamus debitis.",
    },
    {
      id: 2,
      img: "/download (6).jpg",
      name: "James Parker",
      position: "CEO",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit assumenda explicabo tempora molestias fuga excepturi, reiciendis expedita aut, dicta repellendus odio accusamus debitis.",
    },
  ];

  return (
    <div className="min-w-full mx-auto py-10 bg-white">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-lg font-medium text-orange-600">CLIENT FEEDBACK</h1>
        <h1 className="text-4xl font-bold">Our Client Reviews</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-[80%]">
          {Card.length > 0 ? (
            Card.map((section) => (
              <div
                key={section.id}
                className="relative rounded-xl p-8 border border-gray-200 shadow-lg bg-white hover:shadow-2xl transition duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <img
                    src={section.img}
                    alt={section.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                  {section.feedback}
                </p>


                <h1 className="text-xl font-bold">
                  {section.name}
                </h1>
                <h2 className="text-orange-600">{section.position}</h2>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No client feedback available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
