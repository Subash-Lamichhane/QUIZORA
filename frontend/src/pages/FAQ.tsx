import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { faqData } from "../constants/faq";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleFaq = (index: number): void => {
    setExpandedFaqs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto my-8 bg-black p-4 rounded-lg">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq: FAQItem, index: number) => (
        <div key={index} className="mb-2 border-b border-gray-800">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
          >
            <span className="text-white text-lg">{faq.question}</span>
            <HiChevronDown
              className={`text-white transition-transform duration-300 text-3xl ${
                expandedFaqs[index] ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {expandedFaqs[index] && faq.answer && (
            <div className="px-2 pb-4 text-gray-400">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
