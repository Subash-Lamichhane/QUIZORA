// src/components/SwipeCards.tsx
import React, { useState, useEffect } from "react";
import Card, { CardData } from "./Card";
import { useParams } from "react-router-dom";
import { getRandomColor } from "../utils/getRandomColor";

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

      const coloredData = card_data.map((card: CardData) => ({
        ...card,
        color: getRandomColor(), // Assign a random color
      }));

      setCards(coloredData); // Set the state with colored card data
      const data = await response.json();
      setCards(data);
    };

    fetchCardData();
  }, []);

  return (
    <div className="grid h w-full place-items-center bg-neutral-100 h-full">
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

export default SwipeCards;
