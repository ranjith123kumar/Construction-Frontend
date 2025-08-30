import { useState } from "react";
import { BsPersonGear } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import service from "../Service";

const features = [
  { id: 1, icon: <BsPersonGear />, title: "Optimized Cost" },
  { id: 2, icon: <TbTruckDelivery />, title: "Delivery on Time" },
  { id: 3, icon: <MdOutlineHealthAndSafety />, title: "Safety & Reliability" },
];

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const fixedData = {
        ...formData,
        phone: Number(formData.phone),
        distance: Number(formData.distance),
        load: Number(formData.load),
      };

      const response = await service.register(fixedData);
      setMessage("✅ Quote request submitted successfully!");
      setFormData(initialstate);
      console.log("Success Response:", response);
    } catch (error) {
      setMessage("❌ Failed to submit. Please try again.");
      console.error("Error while sending details:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative py-16 w-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("/programming-background-with-person-working-with-codes-computer.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row justify-between items-start h-full px-6 md:px-20 text-white gap-12">
        
        {/* Left Section */}
        <div className="max-w-xl">
          <p className="text-orange-500 font-semibold text-lg uppercase mb-2">
            Why Choose Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            We are the Future of <br /> Cargo & Logistics
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis lectus, id volutpat magna.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((item) => (
              <div
                key={item.id}
                className="bg-indigo-950 bg-opacity-70 p-5 border-2 rounded-xl text-center shadow-xl group transition-transform duration-300 hover:scale-105 hover:bg-orange-600"
              >
                <p className="text-orange-500 group-hover:text-white text-5xl font-semibold mb-3">
                  {item.icon}
                </p>
                <h3 className="text-white text-lg font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Quote Form */}
        <div className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Request a Quote
          </h2>

          {message && (
            <div className={`text-center mb-4 font-medium ${message.includes("✅") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-white block mb-1">Name</label>
              <input
                id="name"
                value={formData.name}
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg outline-orange-600 bg-white text-black"
                onChange={handleChange}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="text-white block mb-1">Email</label>
                <input
                  id="email"
                  value={formData.email}
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg outline-orange-600 bg-white text-black"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-white block mb-1">Phone</label>
                <input
                  id="phone"
                  value={formData.phone}
                  required
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="Phone No"
                  className="w-full p-3 rounded-lg outline-orange-600 bg-white text-black"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Distance */}
            <div>
              <label htmlFor="distance" className="text-white block mb-1 flex justify-between">
                <span>Distance (Miles)</span>
                <span className="bg-orange-600 px-2 py-0.5 rounded-md text-sm font-semibold">{formData.distance}</span>
              </label>
              <input
                id="distance"
                type="range"
                name="distance"
                min="100"
                max="7000"
                value={formData.distance}
                onChange={handleChange}
                className="w-full accent-orange-600 cursor-pointer"
              />
            </div>

            {/* Freight & Load */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                value={formData.freight}
                name="freight"
                required
                className="w-full p-3 rounded-lg outline-orange-600 bg-white text-gray-700 cursor-pointer"
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
                className="w-full p-3 rounded-lg outline-orange-600 bg-white text-gray-700 cursor-pointer"
                onChange={handleChange}
              >
                <option value="">Select Load</option>
                <option value="1">Light</option>
                <option value="2">Medium</option>
                <option value="3">Heavy</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-white font-semibold border-2 text-orange-600 px-6 py-3 rounded-lg w-full hover:bg-orange-600 hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Now →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisiterSection;
