import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div className="bg-black w-full min-h-screen text-white">
      <NavBar />
      <div className=" text-gray-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto py-12 px-6 md:px-12  rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold mb-8 text-center border-b-2 pb-4 border-gray-700">
            About <span className="text-gray-400">QUIZORA</span>
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-300 text-center">
            QUIZORA is a revolutionary web application designed to make effective learning engaging and fun in today's fast-paced world.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-400">
            Key Features:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-3 text-lg text-gray-300">
            <li>Personalized Quiz Generation across various subjects</li>
            <li>Multiple AI Models for varied performance</li>
            <li>Save and Load Question Sets</li>
            <li>Interactive and intuitive user interface</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-400">
            Our AI Models:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-3 text-lg text-gray-300">
            <li>
              <span className="font-bold text-white">Llama3-8b-8192:</span> High efficiency and speed (212.7 tokens/s)
            </li>
            <li>
              <span className="font-bold text-white">GPT-4o-Mini:</span> Balanced experience with moderate speed (112.9 tokens/s)
            </li>
            <li>
              <span className="font-bold text-white">Mistral-Small:</span> Slower but more creative and deeper (80.7 tokens/s)
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-300 mt-8 text-center">
            QUIZORA combines technology and education through gamified quizzes, enhancing knowledge retention and understanding in a personalized learning environment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
