const express = require('express');
const { addQuiz, getQuizByIdentifier } = require('../controllers/quizController');

const router = express.Router();

// Route for adding a new quiz
router.post('/add', addQuiz);

// Route for getting a quiz by identifier
router.get('/:identifier', getQuizByIdentifier);

module.exports = router;
