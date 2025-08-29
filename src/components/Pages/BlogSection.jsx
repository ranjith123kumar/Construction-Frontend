import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

const BlogSection = () => {
  const Card = [
    {
      id: 1,
      img: "/download (6).jpg",
      date: "20 May",
      role: "Admin",
      comment: "5 Comments",
      title: "Varying Complexity, Provide Long-Term Guarantees",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda explicabo tempora molestias fuga excepturi, reiciendis expedita aut.",
    },
    {
      id: 2,
      img: "/download (6).jpg",
      date: "22 May",
      role: "Guest",
      comment: "3 Comments",
      title: "Innovative Solutions for Complex Business Needs",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda explicabo tempora molestias fuga excepturi, reiciendis expedita aut.",
    },
    {
      id: 3,
      img: "/download (6).jpg",
      date: "25 May",
      role: "Visitor",
      comment: "8 Comments",
      title: "Building Trust Through Long-Term Commitments",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda explicabo tempora molestias fuga excepturi, reiciendis expedita aut.",
    },
  ];

  return (
    <div className="min-w-full mx-auto py-16 bg-white">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-lg font-medium text-orange-600">LATEST NEWS</h1>
        <h1 className="text-4xl font-bold">Latest News & Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-[80%]">
          {Card.length > 0 ? (
            Card.map((section) => (
              <div
                key={section.id}
                className="relative rounded-xl border border-gray-200 shadow-lg bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={section.img}
                    alt={section.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center text-sm px-4 py-2 bg-white border border-gray-300">
                    <span className="flex items-center gap-2 "><MdOutlineDateRange className="text-2xl text-orange-500"  />{section.date}</span>
                    <span className="flex items-center gap-2 "><IoIosContact className="text-2xl text-orange-500" />{section.role}</span>
                    <span className="flex items-center gap-2  "><FaRegMessage  className="text-xl text-orange-500"/>{section.comment}</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h1 className="text-xl font-semibold group-hover:text-orange-600 transition">
                    {section.title}
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {section.feedback}
                  </p>
                  <div className="flex justify-between items-center pt-3">
                     <Link
                    to="/blogs"
                    className="group-hover:text-orange-600 font-medium hover:underline"
                  >
                    Read More
                  </Link>
                    <FaArrowRight className="text-orange-600" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
