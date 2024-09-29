import { useState } from "react";
import Models from "../components/Models";
import NavBar from "../components/NavBar";
import Tags from "../components/Tags";

const CreateQuizora = () => {
  const tags = [
    "Physics",
    "Chemistry",
    "Biology",
    "Astronomy",
    "Engineering",
    "Genetics",
    "Evolution",
    "History",
    "Technology",
    "Space",
    "Microbiology",
    "Ecology",
    "AI",
    "Mathematics",
    "Computing",
    "Geology",
    "Environment",
    "Neuroscience",
    "Mathematical",
    "Ethics",
    "Philosophy",
    "Materials",
    "Robotics",
    "Quantum",
    "Astrophysics",
    "Machine",
    "Genomics",
    "Data",
    "Agriculture",
    "Health",
    "Meteorology",
    "Programming",
    "Web",
    "Software",
    "Structures",
    "Algorithms",
    "Mobile",
    "Game",
    "DevOps",
    "Cloud",
    "Cybersecurity",
    "Neural",
    "Graphics",
    "HCI",
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]); // State to hold selected tags

  const models = ["llama3-8b-8192", "mistral-small", "gpt-4o-mini"];

  const [selectedModels, setSelectedModels] = useState<string | null>(null); // State to hold selected models

  const handleQuizora = () => {};
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
          selectedModel={selectedModels}
          onSelectModel={setSelectedModels}
        />
        <div className="w-full flex justify-center items-center pt-16">
          <button
            className="border-4 border-white px-10 py-2 text-3xl rounded-2xl hover:bg-white hover:text-black ease-in-out  font-semibold tracking-wider"
            onClick={() => {
              handleQuizora();
            }}
          >
            {" "}
            Quizora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizora;
