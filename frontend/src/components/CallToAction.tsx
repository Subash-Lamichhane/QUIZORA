// CallToAction.tsx
import React from "react";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <div className="text-center my-32 mt-40">
      <div className="max-w-3xl mx-auto text-center my-10 mt-20">
        <blockquote className="italic text-gray-400 text-3xl">
          "The best way to predict the future is to create it."
        </blockquote>
        <p className="mt-2 text-gray-400 text-xl italic text-right">– Peter Drucker</p>
      </div>

      <div className="flex justify-center items-center space-x-6">
        <Link
          to="/create-quizora"
          className="bg-gray-200 text-black py-2 px-8 rounded-lg  transition duration-200 text-lg font-semibold border-2 border-white hover:shadow-md hover:bg-white"
        >
          Create your Quizora
        </Link>
        <Link
          to="/#explore-quizora"
          className="bg-black text-white py-2 px-8 rounded-lg hover:bg-black transition duration-200 text-lg font-semibold border-2 border-black hover:border-white"
        >
          Explore our Quizora
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
