import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Is My Technology Allowed on Tech?",
    answer: "Yes, your technology is supported. We provide full integration and support for all major platforms."
  },
  {
    question: "How Long Does air Freight Take?",
    answer: "Air freight typically takes between 2 to 7 days depending on the destination and customs clearance."
  },
  {
    question: "What Payment Methods are Supported?",
    answer: "We support credit cards, debit cards, PayPal, and bank transfers."
  },
  {
    question: "What Payment Methods are Supported?",
    answer: "We support multiple methods for your convenience including UPI, wallets, and international transfers."
  },
  {
    question: "What Payment Methods are Supported?",
    answer: "We support multiple methods for your convenience including UPI, wallets, and international transfers."
  }
];

const FrequentSection = () => {
    
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
  AOS.init({ duration: 800, once: true }); 
}, []);

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 " >
        <div className="text-center space-y-3 mb-10">
            <h2 className="font-semibold text-lg text-orange-600">HOW IT'S WORK</h2>
            <h1 className="font-bold text-4xl ">Frequently Asked Question</h1>
        </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6" data-aos="fade-down">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
            alt="Shipping"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 text-2xl">✔</span>
              <div>
                <h4 className="font-semibold text-lg">Reliable & Trustworthy</h4>
                <p className="text-gray-600 text-sm">
                  We deliver services on time with complete safety and trust.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 text-2xl ">✔</span>
              <div>
                <h4 className="font-semibold text-lg">High Quality Material</h4>
                <p className="text-gray-600 text-sm">
                  We use the best material for packaging and shipping to ensure safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>;
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-orange-600 transition"
                >
                  {faq.question}
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentSection;