import type { VercelRequest, VercelResponse } from "@vercel/functions";

const OPENAI_API_KEY = (process.env.VITE_OPENAI_API_KEY || "").replace(
  /[\r\n]/g,
  ""
);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    // Validate prompt parameter
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        error: "Prompt is required and must be a string",
      });
    }

    // Validate prompt length
    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt.length === 0) {
      return res.status(400).json({
        error: "Prompt cannot be empty",
      });
    }

    if (trimmedPrompt.length < 2 || trimmedPrompt.length > 2000) {
      return res.status(400).json({
        error: "Prompt must be between 2 and 2000 characters",
      });
    }

    // Check for API key
    if (!OPENAI_API_KEY) {
      console.error("VITE_OPENAI_API_KEY is not configured");
      return res.status(500).json({
        error: "AI service is not configured",
      });
    }

    // Call OpenAI API
    const openaiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4-turbo-preview",
          messages: [
            {
              role: "system",
              content:
                "You are a knowledgeable financial advisor assistant for Invest With Diomin. Provide concise, professional insights about investments, wealth management, and financial strategy. Keep responses under 200 words.",
            },
            {
              role: "user",
              content: trimmedPrompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    if (!openaiResponse.ok) {
      const error = await openaiResponse.json();
      console.error("OpenAI API error:", error);
      return res.status(400).json({
        error: "Failed to get AI response. Please try again.",
      });
    }

    const data = await openaiResponse.json();
    const aiResponse = data.choices?.[0]?.message?.content || "";

    if (!aiResponse) {
      return res.status(500).json({
        error: "No response from AI service",
      });
    }

    return res.status(200).json({
      response: aiResponse,
    });
  } catch (error) {
    console.error("OpenAI request error:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
