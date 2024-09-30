import React, { useState, useEffect } from "react";
import Card, { CardData } from "./Card";
import { useParams } from "react-router-dom";
import CallToAction from "./CallToAction";
import axios from "axios";

type QuizParams = {
id: string;
};

const SwipeCards: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const { id } = useParams<QuizParams>();

  useEffect(() => {
    const fetchCardData = async () => {
      console.log(id); // Log the ID to ensure it's correct

      try {
        // Make the GET request using Axios
        const response = await axios.get(
          `http://localhost:3000/api/questionsets/${id}`
        );

        // Check if the response is successful
        if (response.status === 200) {
          console.log(response)
          const card_data: CardData[] = response.data.questions; // Extract the data from the response
          setCards(card_data); // Set the state with card data
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, [id]); // Add id to the dependency array to re-fetch when id changes

  return (
    <div className="flex flex-col items-center justify-center space-y-20  w-full h-full bg-black text-white p-6">
      <div className="text-center text-5xl font-black tracking-wider">
        Testing Quizora
      </div>

      {/* Cards */}
      <div className="grid place-items-center w-full">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card key={card._id} cards={cards} setCards={setCards} {...card} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            {/* Message */}
            <h1 className="text-2xl font-bold mb-2">
              You have reached the end of Quizora
            </h1>

            {/* Call to Action */}
            <div className="w-full flex justify-center">
              <CallToAction />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwipeCards;
