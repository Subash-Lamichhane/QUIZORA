import { FaGraduationCap } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="px-64  py-10 h-[10%] bg-white flex justify-start items-center gap-2 border-gray-300 border-b-[0.5px]">
      <div className="flex justify-center items-center">
        <FaGraduationCap className="text-4xl" />
      </div>
      <div className="font-black  text-2xl flex justify-center items-center">
        {"Quizora".toUpperCase()}
      </div>
    </div>
  );
};

export default NavBar;
