import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export interface CardData {
  id: number;
  question: string;
  answer: string;
}

interface CardProps extends CardData {
  cards: CardData[];
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
}

const Card: React.FC<CardProps> = ({
  id,
  question,
  answer,
  setCards,
  cards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false); // State to track the flip
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((card) => card.id !== id));
    }
  };

  const handleClick = () => {
    setIsFlipped((prev) => !prev); // Toggle the flip state
  };

  return (
    <motion.div
      className={`relative flex ${
        isFlipped ? "bg-black border-gray-200" : "bg-white "
      } border-[10px] border-gray-900 items-center justify-center h-80 w-[30rem] rounded-3xl hover:cursor-grab active:cursor-grabbing p-6 text-black shadow-3xl shadow-white`}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      onClick={handleClick} // Add onClick to toggle flip
    >
      <motion.div
        className="w-full"
        style={{
          perspective: 1000, // Perspective for 3D effect
        }}
      >
        {/* Front Face */}
        {!isFlipped && (
          <motion.div
            className={`absolute backface-hidden flex items-center justify-center h-full w-full rounded-3xl bg-gray-200`}
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-2xl font-bold">{question}</h2>
          </motion.div>
        )}

        {/* Back Face */}
        {isFlipped && (
          <motion.div
            className={`absolute backface-hidden flex items-center justify-center h-full w-full rounded-3xl text-white`}
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-2xl font-bold">{answer}</h2>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;
