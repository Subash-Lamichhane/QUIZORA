## INSTALLATION

For installation follow following steps:
Install [nodejs](https://nodejs.org/en) and [mongodb](https://www.mongodb.com/) into your machine.

#### Clone the Repository

```bash
git clone https://github.com/Subash-Lamichhane/QUIZORA.git
```

#### Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd QUIZORA/frontend
yarn
```

Start the development server:

```bash
yarn run dev
```

#### Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd ../backend
yarn
```

Set up the environment variables by creating a `.env` file in the backend directory and add given details:

```bash
MONGO_URI=mongodb://localhost:27017/quizdb
NAGA_API_KEY="YOUR NAGA KEY HERE"
MISTRAL_API_KEY="YOUR MISTRAL KEY HERE"
OPENAI_BASE_URL=https://api.naga.ac/v1
GROQ_API_KEY="YOUR GROQ API KEY HERE"
```
- You can get your `MISTRAL_API_KEY` from [here](https://console.mistral.ai/api-keys/)
- You can get `GROQ_API_KEY` from [here](https://console.groq.com/keys)
- You can get `NAGA_API_KEY` from their discord server.

Note: 
- You can use the OpenAI API instead of NAGA.
- To do this, set `NAGA_API_KEY` to your OpenAI API key and change OPENAI_BASE_URL to OpenAI's official URL, `https://api.openai.com/v1`.

Start the backend server:

```bash
yarn run dev
```
The backend server will be running on PORT 3000.

Populate database with sample data while backend is running to load sample data to database:

```
node populateDatabase.js
```