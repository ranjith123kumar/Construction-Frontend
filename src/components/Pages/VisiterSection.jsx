import { useState } from "react";
import { BsPersonGear } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import service from "../Service";

const VisiterSection = () => {
  const initialstate = {
    name: "",
    email: "",
    phone: "",
    distance: 1000,
    freight: "",
    load: 0,
  };

  const [formData, setFormData] = useState(initialstate);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fixedData = {
        ...formData,
        phone: Number(formData.phone),
        distance: Number(formData.distance),
        load: Number(formData.load),
      };

      const response = await service.register(fixedData);
      console.log("Success Response:", response);
    } catch (error) {
      console.error("Error while sending details:", error.response?.data || error.message);
    }
  };

  return (
    <div className="relative bg-cover bg-indigo-900 bg-center min-h-screen flex items-center ">
      <div className="w-[80%] mx-auto py-5 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white max-w-xl mb-8 lg:mb-0">
          <p className="text-orange-600 font-semibold text-lg uppercase mb-2">Why Choose Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-4">
            We are the Future of <br /> Cargo & Logistics
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis lectus, id volutpat magna.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className=" bg-indigo-950 bg-opacity-70 p-4 border-2 hover:bg-orange-600  rounded-xl text-center shadow-2xl group">
              <p className="text-orange-600 group-hover:text-white text-center ps-13 text-5xl font-semibold"><BsPersonGear /></p>
              <h3 className="my-3 text-white text-2xl font-medium">Optimized Cost</h3>
            </div>
            <div className="  bg-indigo-950 bg-opacity-70 p-4 border-2 hover:bg-orange-600  rounded-xl text-center shadow-2xl group">
              <p className="text-orange-600 group-hover:text-white text-center ps-13 text-5xl font-semibold"><TbTruckDelivery /></p>
              <h3 className="my-3 text-white text-2xl font-medium">Delivery on Time</h3>
            </div>
            <div className="  bg-indigo-950 bg-opacity-70 p-4 border-2 hover:bg-orange-600  rounded-xl text-center shadow-2xl group">
              <p className="text-orange-600 group-hover:text-white text-center ps-13 text-5xl font-semibold"><MdOutlineHealthAndSafety /></p>
              <h3 className="my-3 text-white text-2xl font-medium">Safety & Reliability</h3>
            </div>
          </div>
        </div>

        <div className="bg-orange-600 text-white p-6 sm:p-8 rounded-2xl w-full max-w-md shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="text-white block mb-1">Name</label>
            <input
              value={formData.name}
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg outline-gray-600 bg-white text-black"
              onChange={handleChange}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white block mb-1">Email</label>
                <input
                  value={formData.email}
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg outline-gray-600 bg-white text-black"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-white block mb-1">Phone</label>
                <input
                  value={formData.phone}
                  required
                  type="number"
                  name="phone"
                  placeholder="Phone No"
                  className="w-full p-3 rounded-lg outline-gray-600 bg-white text-black"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="text-white block mb-1">Distance (Miles): {formData.distance}</label>
              <input
                type="range"
                name="distance"
                min="100"
                max="7000"
                value={formData.distance}
                onChange={handleChange}
                className="w-full accent-black"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                value={formData.freight}
                name="freight"
                required
                className="w-full p-3 rounded-lg outline-gray-600 bg-white text-gray-500"
                onChange={handleChange}
              >
                <option value="">Select Freight</option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Road">Road</option>
              </select>

              <select
                value={formData.load}
                name="load"
                required
                className="w-full p-3 rounded-lg outline-gray-600 bg-white text-gray-500"
                onChange={handleChange}
              >
                <option value="">Select Load</option>
                <option value="1">Light</option>
                <option value="2">Medium</option>
                <option value="3">Heavy</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-white font-semibold border-2 text-orange-600 px-6 py-3 rounded-lg w-full hover:bg-orange-600 hover:text-white transition-all duration-800"
            >
              Submit Now →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisiterSection;