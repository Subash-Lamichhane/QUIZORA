import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [termsConditions, setTermsConditions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Agreed to Privacy Policy:", privacyPolicy);
    console.log("Agreed to Terms and Conditions:", termsConditions);
    setEmail("");
    setMessage("");
    setPrivacyPolicy(false);
    setTermsConditions(false);
  };

  return (
    <div className="px-4 lg:px-64 flex justify-center items-center my-12">
      <div className="bg-black text-white p-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">Send us a message...</h2>
          <p className="text-gray-300 mb-4">
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you! Fill out the form below, and we'll get back to you
            promptly. Your satisfaction is our priority.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 bg-black p-4 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-base mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-base mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full p-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white  h-24"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={privacyPolicy}
                onChange={() => setPrivacyPolicy(!privacyPolicy)}
                className="mr-2 text-white focus:ring-0"
                required
              />
              I agree to the Privacy Policy
            </label>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={termsConditions}
                onChange={() => setTermsConditions(!termsConditions)}
                className="mr-2 text-white focus:ring-0"
                required
              />
              I agree to the Terms and Conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-300 text-black py-3 rounded-md hover:bg-white transition duration-200 font-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
