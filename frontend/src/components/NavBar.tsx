import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      id="navbar"
      className="px-64 py-6 h-[10vh] flex justify-between items-center"
    >
      <Link
        to="/"
        className="font-black  text-xl flex justify-center items-center"
      >
        {"Quizora".toUpperCase()}
      </Link>

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
        <Link to="https://github.com/Subash-Lamichhane/QUIZORA">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
