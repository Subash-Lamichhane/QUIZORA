// CallToAction.tsx
import React from "react";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <div className="text-center my-20">
      <blockquote className="italic text-gray-400 mb-6 text-2xl max-w-2xl mx-auto">
        "The best way to predict the future is to create it." – Peter Drucker
      </blockquote>
      <div className="flex justify-center items-center space-x-6">
        <Link
          to="/create-quizora"
          className="bg-gray-200 text-black py-3 px-8 rounded-lg  transition duration-200 text-lg font-semibold border-2 border-white hover:shadow-md hover:bg-white"
        >
          Create your Quizora
        </Link>
        <Link
          to="/#explore-quizora"
          className="bg-black text-white py-3 px-8 rounded-lg hover:bg-black transition duration-200 text-lg font-semibold border-2 border-black hover:border-white"
        >
          Explore our Quizora
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
