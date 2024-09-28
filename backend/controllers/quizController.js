const Quiz = require('../models/quizModel');

// Add a new quiz
exports.addQuiz = async (req, res) => {
    const { identifier, questions } = req.body;

    try {
        const existingQuiz = await Quiz.findOne({ identifier });
        if (existingQuiz) {
            return res.status(400).json({ message: 'Quiz with this identifier already exists.' });
        }

        const newQuiz = new Quiz({ identifier, questions });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a quiz by identifier
exports.getQuizByIdentifier = async (req, res) => {
    const { identifier } = req.params;

    try {
        const quiz = await Quiz.findOne({ identifier });
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found.' });
        }

        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
