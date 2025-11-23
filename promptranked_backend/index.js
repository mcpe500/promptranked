require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./config/ConnectionRelated");
const sequelize = require("./config/database");
const Prompt = require("./models/Prompt");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Body:', JSON.stringify(req.body));
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// --- API Endpoints ---

// 1. Create a Prompt
app.post("/api/prompts", async (req, res) => {
  console.log("Start: Creating new prompt...");
  try {
    const { title, content, category } = req.body;

    console.log("Validating input:", { title, content, category });
    if (!title || !content) {
      console.warn("Validation failed: Title or content missing");
      return res.status(400).json({ error: "Title and Content are required" });
    }

    console.log("Input valid. Calling Prompt.create()...");
    const newPrompt = await Prompt.create({
      title,
      content,
      category,
    });
    console.log("Prompt created successfully:", newPrompt.toJSON());

    res.status(201).json(newPrompt);
  } catch (error) {
    console.error("CRITICAL ERROR in POST /api/prompts:", error);
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    if (error.errors) {
        console.error("Validation Errors:", error.errors);
    }
    console.error("Stack Trace:", error.stack);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// 2. Get all Prompts (sorted by score)
app.get("/api/prompts", async (req, res) => {
  try {
    const prompts = await Prompt.findAll();

    // Calculate score and sort in memory (efficient enough for MVP with SQLite)
    // Score = upvotes - downvotes
    const sortedPrompts = prompts.map(p => {
      const prompt = p.toJSON();
      prompt.score = prompt.upvotes - prompt.downvotes;
      return prompt;
    }).sort((a, b) => b.score - a.score);

    res.json(sortedPrompts);
  } catch (error) {
    console.error("Error fetching prompts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 3. Vote on a Prompt
app.post("/api/prompts/:id/vote", async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body; // 'up' or 'down'

    const prompt = await Prompt.findByPk(id);
    if (!prompt) {
      return res.status(404).json({ error: "Prompt not found" });
    }

    if (type === 'up') {
      await prompt.increment('upvotes');
    } else if (type === 'down') {
      await prompt.increment('downvotes');
    } else {
      return res.status(400).json({ error: "Invalid vote type. Use 'up' or 'down'." });
    }

    // Reload to get updated values
    await prompt.reload();

    // Return the updated prompt with the new score
    const updatedPrompt = prompt.toJSON();
    updatedPrompt.score = updatedPrompt.upvotes - updatedPrompt.downvotes;

    res.json(updatedPrompt);
  } catch (error) {
    console.error("Error voting on prompt:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Sync database and start server
const startServer = async () => {
  try {
    console.log("Syncing database...");
    await sequelize.sync(); // This creates the table if it doesn't exist
    console.log('Database synced successfully.');

    const port = PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

if (require.main === module) {
    startServer();
}

module.exports = app;
