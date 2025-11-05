import { handleOpenAIQuery } from "@/api/v1-openai-query";

export interface ApiRequest {
  prompt: string;
}

export interface ApiResponse {
  response?: string;
  error?: string;
}

// This handler is for use in Vite dev server via vite-plugin-api or manual routing
// In production (Vercel), this becomes a serverless function
export async function handleOpenAIRequest(req: ApiRequest): Promise<ApiResponse> {
  try {
    // Validate request
    if (!req || typeof req !== "object") {
      return {
        error: "Invalid request body",
      };
    }

    const { prompt } = req;

    // Validate prompt
    if (!prompt || typeof prompt !== "string") {
      return {
        error: "Prompt is required and must be a string",
      };
    }

    if (prompt.trim().length === 0) {
      return {
        error: "Prompt cannot be empty",
      };
    }

    // Call OpenAI handler
    const result = await handleOpenAIQuery(prompt);

    // Return error if present
    if (result.error) {
      return {
        error: result.error,
      };
    }

    // Return success response
    return {
      response: result.response,
    };
  } catch (error) {
    console.error("API error:", error);
    return {
      error: "Internal server error",
    };
  }
}
