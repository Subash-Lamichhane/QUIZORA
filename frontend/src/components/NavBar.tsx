import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="px-64 py-6 h-[10vh] flex justify-between items-center">
      <div className="font-black  text-xl flex justify-center items-center">
        {"Quizora".toUpperCase()}
      </div>

      <ul className="flex space-x-12 text-xl">
        <li>Home</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>

      <div className="text-3xl">
        <FaGithub />
      </div>
    </div>
  );
};

export default NavBar;
