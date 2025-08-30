import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plane, Truck, Ship, TrainFront, Drone, Gift, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: "road",
    name: "Road Freight",
    icon: Truck,
    title: "Fast & Reliable Road Freight Service",
    desc: "We provide the best services for road transportation with reliability and speed.",
    image: "/Oredr-wallpaper (6).jpg",
  },
  {
    id: "air",
    name: "Air Freight",
    icon: Plane,
    title: "Fast & Reliable Air Freight Service",
    desc: "We provide world-class air freight services ensuring safe and quick delivery.",
    image: "/Oredr-wallpaper (5).jpg",
  },
  {
    id: "ocean",
    name: "Ocean Freight",
    icon: Ship,
    title: "Fast & Reliable Ocean Freight Service",
    desc: "Trusted sea freight services with secure shipment across the globe.",
    image: "/Oredr-wallpaper (4).jpg",
  },
  {
    id: "train",
    name: "Train Freight",
    icon: TrainFront,
    title: "Fast & Reliable Train Freight Service",
    desc: "Affordable and quick railway freight options for domestic transport.",
    image: "/Oredr-wallpaper (3).jpg",
  },
  {
    id: "drone",
    name: "Drone Freight",
    icon: Drone,
    title: "Fast & Reliable Drone Freight Service",
    desc: "Modern drone delivery service for smaller packages in no time.",
    image: "/Oredr-wallpaper (2).jpg",
  },
  {
    id: "gift",
    name: "Send Gift",
    icon: Gift,
    title: "Fast & Reliable Gift Delivery Service",
    desc: "Send gifts to your loved ones with our express gift delivery system.",
    image: "/Oredr-wallpaper (1).jpg",
  },
];

const FreightSection = () => {
  const [active, setActive] = useState("air");
  const activeService = services.find((s) => s.id === active);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-w-full h-auto bg-center bg-cover py-16" 
      style={{ backgroundImage: 'url("/wallpaper.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <img
            src={activeService.image}
            alt={activeService.name}
            data-aos="fade-right"
            className="w-full md:w-1/2 h-[350px] md:h-[450px] rounded-2xl shadow-lg object-cover"
          />

          {/* Text */}
          <div className="max-w-lg text-white" data-aos="fade-left">
            <p className="text-orange-400 font-semibold text-2xl">
              We Provide Best Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
              {activeService.title}
            </h1>
            <p className="mt-4 text-gray-200">{activeService.desc}</p>
            <Link
              to="/service"
              className="mt-6 flex items-center gap-2 bg-orange-600 border border-orange-600 hover:bg-white px-6 py-3 rounded-xl font-semibold text-white hover:text-orange-600 shadow-lg transition-transform duration-300 hover:scale-105 w-fit"
            >
              Read More <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Services Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                aria-label={`Select ${service.name}`}
                aria-pressed={active === service.id}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl shadow-md transition-all duration-300 hover:scale-105 ${
                  active === service.id
                    ? "bg-orange-600 text-white ring-2 ring-orange-400 shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon size={24} />
                <span className="font-medium">{service.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreightSection;
