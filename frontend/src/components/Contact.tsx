import { useState } from "react";

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormStatus("submitted");
  };

  return (
    <div className="flex justify-center items-center">
      <section className="text-white py-12 px-4 md:w-[40rem]">
        <div className="max-w-3xl mx-auto bg-black rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-white font-semibold mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                required
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300"
              disabled={formStatus === "submitting"}
            >
              {formStatus === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
          {formStatus === "submitted" && (
            <p className="mt-4 text-center font-semibold text-gray-300">
              Thank you for your message. We'll get back to you soon!
            </p>
          )}
          {formStatus === "error" && (
            <p className="mt-4 text-center font-semibold text-gray-300">
              An error occurred. Please try again later.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
