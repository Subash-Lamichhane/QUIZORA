import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Import icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 w-full border-t border-gray-600">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h4 className="text-2xl font-bold">Quizora</h4>
          <p className="text-sm mt-2">Your go-to quiz creation tool.</p>
          <p className="text-sm mt-2">Craft engaging quizzes effortlessly.</p>
          <p className="text-sm mt-2">Email: support@quizora.com</p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-bold mb-2">Resources</h5>
          {["About", "FAQ", "Contact", "Blog", "Terms of Service", "Privacy Policy"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-300 hover:text-white transition duration-200 mb-1"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-white transition duration-200 transform hover:scale-110"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-white transition duration-200 transform hover:scale-110"
              aria-label="Follow us on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-white transition duration-200 transform hover:scale-110"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-white transition duration-200 transform hover:scale-110"
              aria-label="Follow us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Newsletter Signup */}
          <h5 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h5>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 border border-gray-600 rounded text-black focus:ring-white"
              required
            />
            <button type="submit" className="bg-gray-200 font-bold hover:bg-white text-black px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-6 pt-4">
        &copy; {new Date().getFullYear()} Quizora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
