import React from "react";

const Quotation: React.FC = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md text-center my-6">
      <blockquote className="text-2xl italic mb-4">
        "Explore the joy of learning with quizzes made just for you!"
      </blockquote>
      <footer className="text-lg font-semibold">- Quizora</footer>
    </div>
  );
};

export default Quotation;
