import { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const faqsPerPage: number = 5;
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/FAQ.json");
      const data = await response.json();
      setFaqData(data);
    };

    fetchData();
  }, []);

  const totalPages: number = Math.ceil(faqData.length / faqsPerPage);
  const indexOfLastFaq: number = currentPage * faqsPerPage;
  const indexOfFirstFaq: number = indexOfLastFaq - faqsPerPage;
  const currentFaqs: FAQItem[] = faqData.slice(indexOfFirstFaq, indexOfLastFaq);

  const toggleFaq = (index: number): void => {
    setExpandedFaqs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="max-w-3xl mx-auto my-8 bg-black p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Frequently Asked Questions
      </h1>
      <div className="min-h-[20rem] my-6">
        {currentFaqs.map((faq: FAQItem, index: number) => (
          <div
            key={index}
            className="mb-4 border-b border-gray-500 pb-4 bg-gray-800 px-4 py-4 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-semibold text-gray-100 hover:text-gray-300 focus:outline-none pt-2"
              >
                {faq.question}
              </button>
              <button
                onClick={() => toggleFaq(index)}
                className="text-white ml-4 focus:outline-none pt-1"
              >
                {expandedFaqs[index] ? "➖" : "➕"}
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 rounded-xl border transition-colors duration-200 ease-in-out ${
              currentPage === i + 1
                ? "bg-gray-100 text-black border-transparent"
                : "bg-black text-white border-gray-600 hover:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
