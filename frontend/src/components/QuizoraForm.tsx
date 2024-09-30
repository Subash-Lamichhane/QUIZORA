import { FC } from "react";

const QuizoraForm: FC<{
  onSubmit: (data: { name: string; description: string }) => void;
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
}> = ({ onSubmit, name, setName, description, setDescription }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onSubmit({ name, description });
      setName("");
      setDescription("");
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  return (
    <div className="bg-black text-white p-8 rounded-2xl mt-6 max-w-md mx-auto w-full border-2 border-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Your Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-lg">Quiz Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-lg">
            Short Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            rows={6}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-200 font-bold text-black p-3 rounded-lg hover:bg-white transition w-full text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuizoraForm;
