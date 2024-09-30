interface CardData {
  id: number;
  title: string;
  description: string;
}

const ExploreQuizora = () => {
  // Dummy data for cards
  const cards: CardData[] = [
    {
      id: 1,
      title: "Card Title 1",
      description: "This is a brief description for Card 1.",
    },
    {
      id: 2,
      title: "Card Title 2",
      description:
        "This is a brief description for Card 2. It's a bit longer to showcase the design.on for Card 2. It's a bit longer to showcase the design.on for Card 2. It's a bit longer to showcase the design.on for Card 2. It's a bit longer to showcase the design.",
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "This is a brief description for Card 3.",
    },
    {
      id: 4,
      title: "Card Title 4",
      description: "This is a brief description for Card 4.",
    },
    {
      id: 5,
      title: "Card Title 5",
      description: "This is a brief description for Card 5.",
    },
    {
      id: 6,
      title: "Card Title 6",
      description: "This is a brief description for Card 6.",
    },
  ];

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
          <div
            key={card.id}
            className={`flex flex-col items-center justify-start space-y-4 w-full rounded-2xl shadow-lg transition-transform transform hover:scale-105 bg-gray-950 text-black p-6  hover:shadow-white border-2 border-white hover:cursor-pointer`}
          >
            <h2 className="text-lg font-bold mb-2 bg-white text-black w-full rounded-xl text-center py-1 tracking-wider ">
              {card.title}
            </h2>
            <p className="text-md text-gray-100 line-clamp-4 px-4 ">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreQuizora;
