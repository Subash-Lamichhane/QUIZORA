import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="px-64 py-6 h-[10vh] flex justify-between items-center">
      <div className="font-black  text-xl flex justify-center items-center">
        {"Quizora".toUpperCase()}
      </div>

      <ul className="flex space-x-12 text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>

      <div className="text-3xl">
        <FaGithub />
      </div>
    </div>
  );
};

export default NavBar;
