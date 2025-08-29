import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { CgNametag } from "react-icons/cg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const BlogVisitSection = () => {
  return (
    <div className="py-10">
      <div className="w-[80%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div className="md:col-span-2 space-y-6">
          <img
            src="/download (6).jpg"
            alt=""
            className="w-full h-[22rem] object-cover rounded-lg shadow-md"
          />
          <h1 className="font-semibold text-3xl">
            Helping Companies in Their Green Transition
          </h1>

          <div className="flex flex-wrap justify-between items-center text-sm px-2">
            <span className="flex items-center gap-2">
              <IoIosContact className="text-xl text-orange-500" /> By Admin
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineDateRange className="text-xl text-orange-500" /> June 29
              2025
            </span>
            <span className="flex items-center gap-2">
              <FaRegMessage className="text-lg text-orange-500" /> Comment
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            a ipsam ex velit et illo sed ullam id! Ducimus molestias quos quidem
            eligendi odio deleniti eaque sequi adipisci, eum error.
          </p>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="/download (6).jpg"
              alt=""
              className="rounded-lg w-full h-52 object-cover shadow"
            />
            <div className="space-y-3">
              {[
                "Fast and reliable transport service",
                "Affordable and transparent pricing",
                "Experienced professional drivers",
                "24/7 customer support available",
                "Safe and secure cargo handling",
              ].map((text, i) => (
                <p key={i} className="text-sm flex items-center">
                  <TiTick className="text-xl text-orange-600" />
                  {text}
                </p>
              ))}
            </div>
          </div>

          <h1 className="font-semibold text-2xl">
            We Exist to Inspire the World to Play
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            a ipsam ex velit et illo sed ullam id! Ducimus molestias quos quidem
            eligendi odio deleniti eaque sequi adipisci, eum error.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/download (6).jpg"
              alt=""
              className="rounded-lg w-full h-52 object-cover shadow"
            />
            <img
              src="/download (6).jpg"
              alt=""
              className="rounded-lg w-full h-52 object-cover shadow"
            />
          </div>

          <h1 className="font-semibold text-2xl">
            An Airborne Crisis on Two Fronts
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            a ipsam ex velit et illo sed ullam id! Ducimus molestias quos quidem
            eligendi odio deleniti eaque sequi adipisci, eum error.
          </p>

          <div className="w-full rounded-lg shadow-lg p-6 space-y-3 bg-gray-50">
            <span className="text-3xl text-orange-600 flex">
              <BiSolidQuoteSingleRight />
              <BiSolidQuoteSingleRight />
            </span>
            <p className="text-gray-600 text-justify text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              aliquid sint consequatur ullam labore omnis, nostrum voluptatem eos
              nam repudiandae recusandae fuga, nihil porro rem ducimus accusantium
              quaerat beatae eum sit quo distinctio facere.
            </p>
            <h1 className="text-xl font-semibold text-orange-600 flex gap-2 items-center">
              <CgNametag /> David Smith
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-5">
            <div className="flex gap-3">
              {["Transport", "Delivery", "Logistics"].map((tag, i) => (
                <span
                  key={i}
                  className="p-2 border text-gray-600 border-gray-300 shadow hover:bg-orange-600 hover:text-white rounded transition duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-xl">
              <FaFacebookF className="bg-white p-1 text-3xl rounded-full border text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300 cursor-pointer" />
              <LuInstagram className="bg-white p-1 text-3xl rounded-full border text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300 cursor-pointer" />
              <BsTwitterX className="bg-white p-1 text-3xl rounded-full border text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300 cursor-pointer" />
              <FaLinkedinIn className="bg-white p-1 text-3xl rounded-full border text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300 cursor-pointer" />
            </div>
          </div>
        </div>


        <div className="space-y-6">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-600 text-white px-4 rounded-r-md">
              <CiSearch />
            </button>
          </div>

          {/* Popular Posts */}
          <div className="bg-gray-100 p-4 rounded-lg shadow space-y-4">
            <h1 className="font-bold text-xl">Popular Post</h1>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <img
                  src="/download (6).jpg"
                  alt=""
                  className="rounded-full w-20 h-20 object-cover shadow"
                />
                <div>
                  <div className="flex justify-between gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MdOutlineDateRange className="text-orange-500" /> June 29
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegMessage className="text-orange-500" /> 105
                    </span>
                  </div>
                  <p className="font-medium text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet elit.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-gray-100 p-4 rounded-lg shadow space-y-2">
            <h1 className="font-bold text-xl mb-2">All Categories</h1>
            {[
              ["Introductions", 15],
              ["Engineering", 14],
              ["Transport", 7],
              ["Logistics", 4],
              ["Business", 9],
              ["Work Permits", 8],
            ].map(([cat, num], i) => (
              <div
                key={i}
                className="flex justify-between hover:text-orange-600 cursor-pointer"
              >
                <h1>{cat}</h1>
                <p className="text-orange-600">{num}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h1 className="font-bold text-xl mb-3">Popular Tags</h1>
            <div className="flex flex-wrap gap-2">
              {[
                "Business",
                "Delivery",
                "Logistics",
                "Career",
                "Consulting",
                "Travel",
                "Education",
                "India",
                "Maintenance",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="p-2 border text-gray-600 bg-white border-gray-300 shadow hover:bg-orange-600 hover:text-white rounded transition duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogVisitSection;
