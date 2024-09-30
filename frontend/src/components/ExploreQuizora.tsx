import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CardData {
  id: number;
  name: string;
  description: string;
}

const ExploreQuizora = () => {
  // Dummy data for cards
  const [cards, setCards] = useState<CardData[]>([]); // Initialize state for cards
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/questionsets"
        );

        // Extract only _id, name, and description from the API response
        const transformedCards = response.data.map(
          (item: { _id: string; name: string; description: string }) => ({
            id: item._id, // Use `_id` from API as id
            name: item.name, // Use `name` from API
            description: item.description, // Use `description` from API
          })
        );

        setCards(transformedCards); // Set the state with the transformed cards
      } catch (error) {
        setError("Error fetching data"); // Handle error
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false); // Always set loading to false at the end
      }
    };

    fetchCardData();
  }, []); // Run once on component mount

  // Render loading state, error message, or card data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      id="explore-quizora"
      className="bg-black  flex flex-col items-center px-64 gap-8 mt-24"
    >
      <h1 className="w-full text-4xl text-center  font-bold tracking-widest text-white py-6 mb-10">
        Explore Quizora
      </h1>

      {/* Grid container for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {cards.map((card) => (
          <Link to={`/quizora/${card.id}`} key={card.id}>
            <div
              className={`flex flex-col items-center justify-start space-y-4 w-full rounded-2xl shadow-lg transition-transform transform hover:scale-105 bg-gray-950 text-black p-6  hover:shadow-white border-2 border-white hover:cursor-pointer`}
            >
              <h2 className="text-lg font-bold mb-2 bg-white text-black w-full rounded-xl text-center py-1 tracking-wider line-clamp-1 px-1">
                {card.name}
              </h2>
              <p className="text-md   text-gray-100 line-clamp-4 px-4 ">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreQuizora;
