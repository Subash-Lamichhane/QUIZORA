import { FC } from "react";

const Instructions: FC<{ onDismiss: () => void }> = ({ onDismiss }) => {
  return (
    <div className="bg-black text-white p-8 rounded-2xl mt-6 max-w-md mx-auto w-full border-2 border-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Instructions</h2>
      <div className="mb-6">
        <p className="text-lg text-gray-300 mb-4">
          1. Swipe left or right to reveal the next card.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          2. Click on a card to reveal the answer.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          3. Continue swiping to complete the quizora.
        </p>
      </div>
      <button
        onClick={onDismiss}
        className="bg-gray-200 font-bold text-black p-3 rounded-lg hover:bg-white transition w-full text-lg"
      >
        Got it!
      </button>
    </div>
  );
};

export default Instructions;
