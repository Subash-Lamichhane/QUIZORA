import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export interface CardData {
  id: number;
  question: string;
  answer: string;
  color: string;
}

interface CardProps extends CardData {
  cards: CardData[];
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
}

const Card: React.FC<CardProps> = ({ id, question, answer, setCards, cards,color }) => {
  const x = useMotionValue(0);
  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

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

  const handleDotClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsClicked((prev) => !prev);
  }, []);

  return (
    <motion.div
      className={`relative flex items-center justify-center h-96 w-[30rem] rounded-3xl shadow-2xl hover:cursor-grab active:cursor-grabbing p-6 text-white`}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        backgroundColor: color
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <h2 className="text-2xl font-bold">{isClicked ? answer : question}</h2>
      <div className="absolute bottom-4 right-4">
        <motion.div
          className="rounded-full cursor-pointer transition-all duration-500"
          style={{
            backgroundColor: isClicked ? "white" : "black",
            height: "32px",
            width: "32px",
            position: "relative",
            zIndex: 10,
          }}
          onClick={handleDotClick}
          initial={{ scale: 1 }}
          animate={{ scale: isClicked ? 0.8 : 1 }}
        />
      </div>
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-black flex items-center justify-center text-white rounded-lg"
          initial={{
            scale: 0,
            originX: clickPosition.x / 100,
            originY: clickPosition.y / 100,
          }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl">{answer}</h3>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
