// routes/questionSetRoutes.js
const express = require('express');
const router = express.Router();
const {
    addQuestionSet,
    getQuestionSetById,
    getAllQuestionSets,
    generateQuestionSet
} = require('../controllers/questionSetController');

// Route for adding a question set
// Example:
// Method: POST
// URL: http://localhost:3000/api/questionsets
// Body: {
//     "questions": [
//       { "question": "Who was the first president of the United States?", "answer": "George Washington" },
//       { "question": "What is the capital of France?", "answer": "Paris" }
//     ]
//   }
  
router.post('/', addQuestionSet);

// Route for getting a question set by ID
// Example:
// Method: GET
// URL: http://localhost:3000/api/questionsets
router.get('/:id', getQuestionSetById);

// Route for getting all question sets
// Example
// Method: GET
// URL: http://localhost:3000/api/questionsets/<id>
router.get('/', getAllQuestionSets);

// Route for generating a question set via OpenAI
router.post('/generate', generateQuestionSet);

module.exports = router;
