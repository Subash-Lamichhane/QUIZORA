// controllers/questionSetController.js
const QuestionSet = require('../models/questionSetModel');
const axios = require('axios');
const { Mistral } = require('@mistralai/mistralai')
const { OpenAI } = require('openai')
const { Groq } = require('groq-sdk')
require('dotenv').config();

const OPENAI_API_KEY = process.env.NAGA_API_KEY;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL;
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, // Use OpenAI API key
    baseURL: OPENAI_BASE_URL// Custom base URL for OpenAI
});
const llamaClient = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
const mistralClient = new Mistral(MISTRAL_API_KEY)

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


// Generate a new question set using OpenAI or Mistral AI based on the model from frontend
exports.generateQuestionSet = async (req, res) => {
    const { prompt, model } = req.body;

    // Validate input from frontend
    if (!prompt || !model || (model !== "openai" && model !== "mistral" && model !== "llama")) {
        return res.status(400).json({ error: 'Please provide a valid prompt and model (model should be "openai" or "mistral" or "llama")' });
    }

    try {
        let generatedText;

        if (model === "openai") {
            // Use NAGA OpenAI API with the provided prompt
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: `create 10 "guess who is type" questions and answer set for a quiz game strictly in format [{"question1","answer1"},{"question2","answer2"},...] strictly no other text. Prompt: ${prompt}` },
                    { role: "user", content: prompt }
                ],
            });
            generatedText = response.choices[0].message.content.trim();
        } else if (model === "mistral") {
            // Use Mistral AI API
            const chatResponse = await mistralClient.chat.complete({
                model: 'mistral-small',
                messages: [{ role: 'user', content: `create 10 "guess who is type" questions and answer set for a quiz game strictly in format [{"question1","answer1"},{"question2","answer2"},...] strictly no other text. Prompt: ${prompt}` }],
            });
            console.log("response:", chatResponse.choices[0].message.content)
            generatedText = chatResponse.choices[0].message.content;
        } else if (model === "llama") {
        // Use llama AI API
        const chatResponse = await llamaClient.chat.completions.create({
            messages: [{ role: 'user', content: `create 10 "guess who is type" questions and answer set for a quiz game strictly in format [{"question1","answer1"},{"question2","answer2"},...] strictly no other text. Prompt: ${prompt}`  }],
            model: 'llama-3.1-8b-instant',
          });
        console.log("response:", chatResponse.choices[0].message.content)
        generatedText = chatResponse.choices[0].message.content;
    }
    res.status(201).json(generatedText);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate question set' });
}
};