// models/questionSetModel.js
const mongoose = require('mongoose');

// Schema for a question-answer pair
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

// Schema for a question set (contains multiple question-answer pairs)
const questionSetSchema = new mongoose.Schema({
    questions: [questionSchema]  // An array of question-answer objects
});

// Export the model
module.exports = mongoose.model('QuestionSet', questionSetSchema);
