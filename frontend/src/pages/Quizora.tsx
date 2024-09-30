import React, { useState } from "react";
import SwipeCards from "../components/SwipeCards";
import Instructions from "../components/Instructions";

const Quizora: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="w-full h-screen flex justify-between items-center gap-20">
      {showInstructions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg z-10 h-full w-full">
          <Instructions onDismiss={() => setShowInstructions(false)} />
        </div>
      )}

      {/* Main Content (Quizora Form or Swipe Cards) */}
      <SwipeCards />
    </div>
  );
};

export default Quizora;
