// controllers/questionSetController.js
const QuestionSet = require('../models/questionSetModel');

// Add a new question set
exports.addQuestionSet = async (req, res) => {
    const { questions } = req.body;

    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ msg: 'Please provide a set of questions' });
    }

    try {
        const newQuestionSet = new QuestionSet({ questions });
        await newQuestionSet.save();
        res.status(201).json(newQuestionSet);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add question set' });
    }
};

// Get a question set by its ID
exports.getQuestionSetById = async (req, res) => {
    const { id } = req.params;

    try {
        const questionSet = await QuestionSet.findById(id);
        if (!questionSet) {
            return res.status(404).json({ msg: 'Question set not found' });
        }
        res.status(200).json(questionSet);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get question set' });
    }
};

// Get all question sets
exports.getAllQuestionSets = async (req, res) => {
    try {
        const questionSets = await QuestionSet.find();
        res.status(200).json(questionSets);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get question sets' });
    }
};
