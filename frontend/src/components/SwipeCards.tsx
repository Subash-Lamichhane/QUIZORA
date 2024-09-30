import React, { useState, useEffect } from "react";
import Card, { CardData } from "./Card";
import { useParams } from "react-router-dom";
import CallToAction from "./CallToAction";

type QuizParams = {
  id: string;
};

const SwipeCards: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const { id } = useParams<QuizParams>();

  useEffect(() => {
    const fetchCardData = async () => {
      // Later on we will use id to fetch from the backend
      console.log(id);

      const response = await fetch("/data/cardData.json");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const card_data: CardData[] = await response.json(); // Convert response to JSON

      setCards(card_data); // Set the state with card data
    };

    fetchCardData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-20  w-full h-full bg-black text-white p-6">
      <div className="text-center text-5xl font-black tracking-wider">
        Testing Quizora
      </div>

      {/* Cards */}
      <div className="grid place-items-center w-full">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          ))
        ) : (
          
          <div className="flex flex-col items-center justify-center p-6">
          {/* Message */}
            <h1 className="text-2xl font-bold mb-2">You have reached the end of Quizora</h1>
        
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
