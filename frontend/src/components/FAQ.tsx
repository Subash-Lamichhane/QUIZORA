import { useState } from "react";
import { faqData, FAQItem } from "../types/faqData"; // Adjust the import path as necessary

const FAQ = () => {
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Toggle the FAQ open/close state
  const toggleFaq = (index: number): void => {
    setExpandedFaqs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto my-8 bg-black p-6 text-white mt-32 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold tracking-widest mb-16 text-center">
        Frequently Asked Questions
      </h1>
      <div className="min-h-[20rem]">
        {faqData.map((faq: FAQItem, index: number) => (
          <div key={index} className="mb-4 border-b border-gray-500 pb-4">
            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-medium text-gray-100 hover:text-gray-300 focus:outline-none pt-2 transition-all duration-200 ease-in-out"
              >
                {faq.question}
              </button>
              <button
                onClick={() => toggleFaq(index)}
                className="text-white ml-4 focus:outline-none pt-1 transition-transform duration-200 ease-in-out hover:scale-110"
              >
                {expandedFaqs[index] ? (
                  <span className="text-white">➖</span>
                ) : (
                  <span className="text-white">➕</span>
                )}
              </button>
            </div>
            <div
              className={`transition-all overflow-hidden duration-300 ${
                expandedFaqs[index] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="mt-2 text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
