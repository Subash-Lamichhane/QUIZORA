import React from "react";

const Quotation: React.FC = () => {
  return (
    <div className="bg-white text-black p-10 text-center my-10 flex justify-center items-center">
      <div className="w-1/2">
        <blockquote className="text-2xl italic mb-4">
          "Explore the joy of learning with quizzes made just for you!"
        </blockquote>
        <footer className="text-lg font-semibold text-right italic">
          - Quizora
        </footer>
      </div>
    </div>
  );
};

export default Quotation;
