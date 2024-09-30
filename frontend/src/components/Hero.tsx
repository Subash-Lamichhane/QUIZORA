import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black h-[90vh] flex justify-center items-center px-64">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left Section - Text */}
        <div className="flex flex-col gap-4 justify-center text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Create Your Quizora
          </h1>
          <p className="text-lg text-gray-400">
            Uncover a world of quizzes thoughtfully tailored to match your
            unique interests, or take charge by designing your own personalized
            quiz experience to challenge and inspire others!
          </p>
          <div className="flex gap-4 mt-6 tracking-widest">
            <button className="bg-white text-black px-8 py-3 font-bold rounded-2xl shadow-lg  hover:scale-105 transition-all duration-300 ease-in-out">
              <Link to="create-quizora">Get Started</Link>
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-2xl shadow-lg  hover:scale-105 transition-all duration-300 ease-in-out">
              Explore Quizzes
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/img/hero.webp"
            alt="Abstract GIF"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
