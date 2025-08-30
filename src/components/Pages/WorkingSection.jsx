import { useEffect } from "react";
import { ClipboardList, Package, Box, Truck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  { id: "01", title: "Online Quote", desc: "Get instant cost estimation for your product or service online.", icon: ClipboardList },
  { id: "02", title: "Picking Product", desc: "Our team carefully picks and verifies your products.", icon: Package },
  { id: "03", title: "Packaging", desc: "We provide secure and reliable packaging to protect your goods.", icon: Box },
  { id: "04", title: "Transport", desc: "Fast and safe transportation with real-time tracking.", icon: Truck },
];

const WorkingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-orange-600 font-semibold uppercase tracking-wide">
          Working Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We Follow Great Process
        </h2>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center relative gap-12 md:gap-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="flex flex-col items-center relative"
                data-aos="fade-up"
                data-aos-delay={index * 200} // staggered delay
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center border-2 rounded-full text-orange-600 font-bold 
                  hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 shadow-md">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <p className="mt-3 text-lg font-semibold">{step.title}</p>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 max-w-[200px]">
                  {step.desc}
                </p>

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <>
                    <div className="hidden md:block w-24 h-0.5 bg-gray-300 absolute top-8 left-full"></div>
                    <div className="md:hidden w-0.5 h-14 bg-gray-300 mt-4"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkingSection;
