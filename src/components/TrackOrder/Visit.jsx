import { useState } from "react";
import service from "../Service";

const Visit = () => {
  const initialstate = {
    name: "",
    email: "",
    phone: "",
    distance: 1000,
    freight: "",
    load: "",
  };

  const [formData, setFormData] = useState(initialstate);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "distance" || name === "load") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.register(formData);
      console.log("Success:", response);
      setFormData(initialstate); 
    } catch (error) {
      console.error("Error while sending details:", error.response?.data || error.message);
    }
  };

  return (
    <div
      className="relative py-10 w-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("/wallpaper.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
     <div className="relative flex flex-col justify-center h-full px-6 md:px-20 text-white">
  <div className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-lg mx-auto">
    <h2 className="text-white text-2xl font-bold mb-6 text-center">
      Request a Quote
    </h2>

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
            placeholder="Phone No"
            className="w-full p-3 rounded-lg outline-orange-600 bg-white text-black"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Distance */}
      <div>
        <label htmlFor="distance" className="text-white block mb-1">
          Distance (Miles): <span className="font-semibold">{formData.distance}</span>
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
        className="bg-white font-semibold border-2 text-orange-600 px-6 py-3 rounded-lg w-full hover:bg-orange-600 hover:text-white transition-all duration-300"
      >
        Submit Now →
      </button>
    </form>
  </div>
</div>


    </div>
  );
};

export default Visit;

