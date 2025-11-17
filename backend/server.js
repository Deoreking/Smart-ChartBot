import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const upload = multer({ dest: "uploads/" });

// ✅ Use latest supported Gemini models (v1, no "models/" prefix)
const MODELS = [
  "models/gemini-2.5-flash",
  "models/gemini-2.5-pro",
  "models/gemini-2.0-flash",
];

// --- Helper: call Gemini with fallback & retries ---
async function callGemini(prompt, retries = 2) {
  for (const modelName of MODELS) {
    for (let i = 0; i < retries; i++) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        return result.response.text();
      } catch (err) {
        if (i < retries - 1) {
          console.warn(`Retrying ${modelName}... attempt ${i + 2}`);
          await new Promise((res) => setTimeout(res, (i + 1) * 2000));
        } else {
          console.error(`Model ${modelName} failed:`, err.message);
        }
      }
    }
  }
  throw new Error("All models failed to respond.");
}

// --- Chat Endpoint ---
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const reply = await callGemini(message);
    res.json({ reply });
  } catch (err) {
    console.error("Chat API Error:", err);
    res.status(500).json({ error: "Something went wrong with chat API" });
  }
});

// --- File Upload Endpoint ---
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const { question } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const filePath = req.file.path;
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => rows.push(data))
      .on("end", async () => {
        fs.unlinkSync(filePath); // cleanup

        try {
          const prompt = `You are a data analyst.
          Question: ${question || "Provide general insights from the data."}
          Dataset sample (first 20 rows): ${JSON.stringify(rows.slice(0, 20))}

          Return JSON only:
          {
            "summary": "A concise answer to the question based on the dataset.",
            "chartType": "line",
            "chartData": [{"category":"A","value":123},{"category":"B","value":456}],
            "xKey": "category",
            "yKey": "value"
          }`;

          let parsedResponse;
          try {
            const textResponse = await callGemini(prompt);
            const cleanText = textResponse
              .replace(/```json/g, "")
              .replace(/```/g, "")
              .trim();
            parsedResponse = JSON.parse(cleanText);
          } catch (parseError) {
            console.error("Failed to parse AI JSON:", parseError);
            return res.status(500).json({
              error: "AI returned invalid JSON. Please try again."
            });
          }

          res.json(parsedResponse);
        } catch (aiError) {
          console.error("AI processing error:", aiError);
          res.status(500).json({ error: "AI model failed to process the request." });
        }
      })
      .on("error", (err) => {
        console.error("CSV Read Error:", err);
        fs.unlinkSync(filePath);
        res.status(400).json({ error: "Invalid CSV file uploaded." });
      });
  } catch (err) {
    console.error("Upload endpoint error:", err);
    res.status(500).json({ error: "Server critical error." });
  }
});

app.listen(3001, async () => {
  console.log("🚀 Server running on port 3001");

  // ✅ On startup: list available models
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${process.env.GEMINI_API_KEY}`
    );
    const data = await response.json();
    if (data.models) {
      console.log("✅ Models available for your API key:");
      data.models.forEach((m) => console.log(" -", m.name));
    } else {
      console.error("❌ Could not fetch model list:", data);
    }
  } catch (err) {
    console.error("❌ Failed to fetch model list:", err.message);
  }
});
