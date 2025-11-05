// OpenAI API route for chat queries
// This runs on the Vite dev server or Vercel edge functions

const OPENAI_API_KEY = (import.meta.env.VITE_OPENAI_API_KEY || "").replace(/[\r\n]/g, "");

export async function handleOpenAIQuery(
  prompt: string
): Promise<{ response: string; error?: string }> {
  // Validate input
  if (!prompt || typeof prompt !== "string") {
    return {
      response: "",
      error: "Invalid prompt provided",
    };
  }

  if (prompt.length < 2 || prompt.length > 2000) {
    return {
      response: "",
      error: "Prompt must be between 2 and 2000 characters",
    };
  }

  // Check for API key
  if (!OPENAI_API_KEY) {
    console.error("VITE_OPENAI_API_KEY is not configured");
    return {
      response: "",
      error: "AI service is not configured",
    };
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
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
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return {
        response: "",
        error: "Failed to get AI response. Please try again.",
      };
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "";

    if (!aiResponse) {
      return {
        response: "",
        error: "No response from AI service",
      };
    }

    return {
      response: aiResponse,
    };
  } catch (error) {
    console.error("OpenAI request error:", error);
    return {
      response: "",
      error: "Network error. Please try again.",
    };
  }
}
