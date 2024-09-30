import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Models from "../components/Models";
import NavBar from "../components/NavBar";
import Tags from "../components/Tags";
import QuizoraForm from "../components/QuizoraForm";
import { tags } from "../constants/tags";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuizora = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const models = ["llama3-8b-8192", "mistral-small", "gpt-4o-mini"];
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [quizName, setQuizName] = useState("");
  const [quizDescription, setQuizDescription] = useState("");

  const navigate = useNavigate();

  const handleQuizora = () => {
    const data = { tags: selectedTags, model: selectedModel };
    console.log(data);
    setShowForm(true);
  };

  const handleFormSubmit = async (data: {
    name: string;
    description: string;
  }) => {
    console.log("Quiz Name:", data.name);
    console.log("Description:", data.description);

    const payload = {
      ...data,
      tags: selectedTags,
      model: selectedModel,
    };

    console.log(payload);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/questionsets/generate",
        payload
      );
      console.log("Response:", response.data);
      // You can handle the response data here, e.g., show a success message

      const { _id } = response.data;
      navigate(`/quizora/${_id}`);
    } catch (error) {
      console.error("Error during API call:", error);
      // You can handle the error here, e.g., show an error message
    }

    setSelectedTags([]);
    setSelectedModel(null);
    setShowForm(false);
  };

  // Handle ESC key press to close the form
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowForm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures this runs on mount and unmount

  return (
    <div className="h-screen w-screen bg-black text-white">
      <NavBar />
      <div className="flex flex-col justify-start h-[80vh]">
        <Tags
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <Models
          models={models}
          selectedModel={selectedModel}
          onSelectModel={setSelectedModel}
        />
        <div className="w-full flex justify-center items-center pt-16">
          <button
            className="border-4 border-white px-10 py-2 text-3xl rounded-2xl hover:bg-white hover:text-black ease-in-out font-semibold tracking-wider"
            onClick={handleQuizora}
          >
            Quizora
          </button>
        </div>
      </div>

      {/* Modal for the Quizora Form */}
      {showForm && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0 backdrop-blur-md shadow-xl shadow-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <QuizoraForm
            onSubmit={handleFormSubmit}
            name={quizName}
            setName={setQuizName}
            description={quizDescription}
            setDescription={setQuizDescription}
          />
        </motion.div>
      )}
    </div>
  );
};

export default CreateQuizora;
