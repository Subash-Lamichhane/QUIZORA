const axios = require('axios');

const generateQuizzes = async () => {
    const quizzes = [
        {
            name: "Fundamentals of Physics",
            description: "A comprehensive quiz covering essential concepts in Physics, including mechanics, thermodynamics, and electromagnetism. Test your understanding of the physical world.",
            tags: ["Physics", "Engineering", "Space"],
            model: "llama3-8b-8192"
        },
        {
            name: "Chemistry Basics",
            description: "Explore the basic principles of Chemistry, including atomic structure, chemical reactions, and periodic table trends. Perfect for beginners looking to solidify their knowledge.",
            tags: ["Chemistry", "Biology", "Health"],
            model: "mistral-small"
        },

        {
            name: "Understanding AI",
            description: "Dive into the basics of Artificial Intelligence, covering key concepts, applications, and ethical considerations. A must-know for anyone interested in the future of technology.",
            tags: ["AI", "Programming", "Computing"],
            model: "mistral-small"
        },
        {
            name: "Space Exploration",
            description: "A quiz focused on significant events and facts about space, including major missions, astronomical discoveries, and the future of human exploration in the cosmos.",
            tags: ["Space", "Astronomy", "Physics"],
            model: "gpt-4o-mini"
        },
        {
            name: "The World of Mathematics",
            description: "Explore fundamental concepts and theories in Mathematics, from algebra and calculus to statistics and geometry. This quiz helps strengthen mathematical skills for students of all levels.",
            tags: ["Mathematics", "Engineering", "Computing"],
            model: "llama3-8b-8192"
        },

        {
            name: "Astrobiology and the Search for Life",
            description: "Explore the field of astrobiology, including the conditions for life, extremophiles, and the search for extraterrestrial life in the universe.",
            tags: ["Astrobiology", "Space", "Biology"],
            model: "gpt-4o-mini"
        }
    ];

    for (let i = 0; i < quizzes.length; i++) {
        const quiz = quizzes[i];

        try {
            const response = await axios.post('http://localhost:3000/api/questionsets/generate', quiz);
            console.log(`Generated Quiz ${i + 1}:`, response.data);
        } catch (error) {
            console.error(`Error generating Quiz ${i + 1}:`, error.message);
        }
    }
};

generateQuizzes();
