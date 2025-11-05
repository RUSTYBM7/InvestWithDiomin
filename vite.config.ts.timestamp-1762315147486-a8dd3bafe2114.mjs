var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/api/v1-openai-query.ts
var v1_openai_query_exports = {};
__export(v1_openai_query_exports, {
  handleOpenAIQuery: () => handleOpenAIQuery
});
async function handleOpenAIQuery(prompt) {
  if (!prompt || typeof prompt !== "string") {
    return {
      response: "",
      error: "Invalid prompt provided"
    };
  }
  if (prompt.length < 2 || prompt.length > 2e3) {
    return {
      response: "",
      error: "Prompt must be between 2 and 2000 characters"
    };
  }
  if (!OPENAI_API_KEY) {
    console.error("VITE_OPENAI_API_KEY is not configured");
    return {
      response: "",
      error: "AI service is not configured"
    };
  }
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a knowledgeable financial advisor assistant for Invest With Diomin. Provide concise, professional insights about investments, wealth management, and financial strategy. Keep responses under 200 words."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 300
      })
    });
    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return {
        response: "",
        error: "Failed to get AI response. Please try again."
      };
    }
    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "";
    if (!aiResponse) {
      return {
        response: "",
        error: "No response from AI service"
      };
    }
    return {
      response: aiResponse
    };
  } catch (error) {
    console.error("OpenAI request error:", error);
    return {
      response: "",
      error: "Network error. Please try again."
    };
  }
}
var OPENAI_API_KEY;
var init_v1_openai_query = __esm({
  "src/api/v1-openai-query.ts"() {
    OPENAI_API_KEY = (import.meta.env.VITE_OPENAI_API_KEY || "").replace(/[\r\n]/g, "");
  }
});

// vite.config.ts
import { defineConfig } from "file:///home/user/app/node_modules/vite/dist/node/index.js";
import react from "file:///home/user/app/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/user/app/node_modules/steercode-tagger/dist/index.js";

// vite-plugin-api.ts
function vitePluginApi() {
  return {
    name: "vite-plugin-api",
    configureServer(server) {
      return () => {
        server.middlewares.use("/api/v1/openai/query", async (req, res) => {
          if (req.method !== "POST") {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: "Method not allowed" }));
            return;
          }
          try {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk.toString();
            });
            req.on("end", async () => {
              try {
                const { handleOpenAIQuery: handleOpenAIQuery2 } = await Promise.resolve().then(() => (init_v1_openai_query(), v1_openai_query_exports));
                const data = JSON.parse(body);
                const { prompt } = data;
                const result = await handleOpenAIQuery2(prompt);
                res.statusCode = result.error ? 400 : 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(result));
              } catch (error) {
                console.error("Parse error:", error);
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Invalid JSON" }));
              }
            });
          } catch (error) {
            console.error("Request error:", error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Internal server error" }));
          }
        });
      };
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "/home/user/app";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 3e3,
    strictPort: true,
    allowedHosts: [
      "steercode.dev",
      "steercode.app",
      ".e2b.dev",
      ".e2b-foxtrot.dev"
    ]
  },
  preview: {
    host: "0.0.0.0",
    port: 3e3,
    strictPort: true,
    allowedHosts: [
      "steercode.dev",
      "steercode.app",
      ".e2b.dev",
      ".e2b-foxtrot.dev"
    ]
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    vitePluginApi()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    sourcemap: true
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwaS92MS1vcGVuYWktcXVlcnkudHMiLCAidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXBpLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdXNlci9hcHAvc3JjL2FwaVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdXNlci9hcHAvc3JjL2FwaS92MS1vcGVuYWktcXVlcnkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdXNlci9hcHAvc3JjL2FwaS92MS1vcGVuYWktcXVlcnkudHNcIjsvLyBPcGVuQUkgQVBJIHJvdXRlIGZvciBjaGF0IHF1ZXJpZXNcbi8vIFRoaXMgcnVucyBvbiB0aGUgVml0ZSBkZXYgc2VydmVyIG9yIFZlcmNlbCBlZGdlIGZ1bmN0aW9uc1xuXG5jb25zdCBPUEVOQUlfQVBJX0tFWSA9IChpbXBvcnQubWV0YS5lbnYuVklURV9PUEVOQUlfQVBJX0tFWSB8fCBcIlwiKS5yZXBsYWNlKC9bXFxyXFxuXS9nLCBcIlwiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9wZW5BSVF1ZXJ5KFxuICBwcm9tcHQ6IHN0cmluZ1xuKTogUHJvbWlzZTx7IHJlc3BvbnNlOiBzdHJpbmc7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgLy8gVmFsaWRhdGUgaW5wdXRcbiAgaWYgKCFwcm9tcHQgfHwgdHlwZW9mIHByb21wdCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZTogXCJcIixcbiAgICAgIGVycm9yOiBcIkludmFsaWQgcHJvbXB0IHByb3ZpZGVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9tcHQubGVuZ3RoIDwgMiB8fCBwcm9tcHQubGVuZ3RoID4gMjAwMCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZTogXCJcIixcbiAgICAgIGVycm9yOiBcIlByb21wdCBtdXN0IGJlIGJldHdlZW4gMiBhbmQgMjAwMCBjaGFyYWN0ZXJzXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBBUEkga2V5XG4gIGlmICghT1BFTkFJX0FQSV9LRVkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVklURV9PUEVOQUlfQVBJX0tFWSBpcyBub3QgY29uZmlndXJlZFwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzcG9uc2U6IFwiXCIsXG4gICAgICBlcnJvcjogXCJBSSBzZXJ2aWNlIGlzIG5vdCBjb25maWd1cmVkXCIsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke09QRU5BSV9BUElfS0VZfWAsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbW9kZWw6IFwiZ3B0LTQtdHVyYm8tcHJldmlld1wiLFxuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICBcIllvdSBhcmUgYSBrbm93bGVkZ2VhYmxlIGZpbmFuY2lhbCBhZHZpc29yIGFzc2lzdGFudCBmb3IgSW52ZXN0IFdpdGggRGlvbWluLiBQcm92aWRlIGNvbmNpc2UsIHByb2Zlc3Npb25hbCBpbnNpZ2h0cyBhYm91dCBpbnZlc3RtZW50cywgd2VhbHRoIG1hbmFnZW1lbnQsIGFuZCBmaW5hbmNpYWwgc3RyYXRlZ3kuIEtlZXAgcmVzcG9uc2VzIHVuZGVyIDIwMCB3b3Jkcy5cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICAgICAgY29udGVudDogcHJvbXB0LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgICAgIG1heF90b2tlbnM6IDMwMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT3BlbkFJIEFQSSBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2U6IFwiXCIsXG4gICAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBnZXQgQUkgcmVzcG9uc2UuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgYWlSZXNwb25zZSA9IGRhdGEuY2hvaWNlcz8uWzBdPy5tZXNzYWdlPy5jb250ZW50IHx8IFwiXCI7XG5cbiAgICBpZiAoIWFpUmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3BvbnNlOiBcIlwiLFxuICAgICAgICBlcnJvcjogXCJObyByZXNwb25zZSBmcm9tIEFJIHNlcnZpY2VcIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlOiBhaVJlc3BvbnNlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk9wZW5BSSByZXF1ZXN0IGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlOiBcIlwiLFxuICAgICAgZXJyb3I6IFwiTmV0d29yayBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICB9O1xuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3VzZXIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91c2VyL2FwcC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91c2VyL2FwcC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJzdGVlcmNvZGUtdGFnZ2VyXCI7XG5pbXBvcnQgeyB2aXRlUGx1Z2luQXBpIH0gZnJvbSBcIi4vdml0ZS1wbHVnaW4tYXBpXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICBwb3J0OiAzMDAwLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgYWxsb3dlZEhvc3RzOiBbXG4gICAgICBcInN0ZWVyY29kZS5kZXZcIixcbiAgICAgIFwic3RlZXJjb2RlLmFwcFwiLFxuICAgICAgXCIuZTJiLmRldlwiLCBcbiAgICAgIFwiLmUyYi1mb3h0cm90LmRldlwiXG4gICAgXVxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgcG9ydDogMzAwMCxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGFsbG93ZWRIb3N0czogW1xuICAgICAgXCJzdGVlcmNvZGUuZGV2XCIsXG4gICAgICBcInN0ZWVyY29kZS5hcHBcIixcbiAgICAgIFwiLmUyYi5kZXZcIiwgXG4gICAgICBcIi5lMmItZm94dHJvdC5kZXZcIlxuICAgIF1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyYmIGNvbXBvbmVudFRhZ2dlcigpLFxuICAgIHZpdGVQbHVnaW5BcGkoKSxcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gIH0sXG59KSk7IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91c2VyL2FwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdXNlci9hcHAvdml0ZS1wbHVnaW4tYXBpLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3VzZXIvYXBwL3ZpdGUtcGx1Z2luLWFwaS50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZpdGVQbHVnaW5BcGkoKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInZpdGUtcGx1Z2luLWFwaVwiLFxuICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoXCIvYXBpL3YxL29wZW5haS9xdWVyeVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xuICAgICAgICAgICAgcmVxLm9uKFwiZGF0YVwiLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgYm9keSArPSBjaHVuay50b1N0cmluZygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcS5vbihcImVuZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBoYW5kbGVPcGVuQUlRdWVyeSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9zcmMvYXBpL3YxLW9wZW5haS1xdWVyeVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHByb21wdCB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBoYW5kbGVPcGVuQUlRdWVyeShwcm9tcHQpO1xuXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXN1bHQuZXJyb3IgPyA0MDAgOiAyMDA7XG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGFyc2UgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMDtcbiAgICAgICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiSW52YWxpZCBKU09OXCIgfSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlcXVlc3QgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9LFxuICB9O1xufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSxlQUFzQixrQkFDcEIsUUFDK0M7QUFFL0MsTUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXLFVBQVU7QUFDekMsV0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBRUEsTUFBSSxPQUFPLFNBQVMsS0FBSyxPQUFPLFNBQVMsS0FBTTtBQUM3QyxXQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFHQSxNQUFJLENBQUMsZ0JBQWdCO0FBQ25CLFlBQVEsTUFBTSx1Q0FBdUM7QUFDckQsV0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBRUEsTUFBSTtBQUNGLFVBQU0sV0FBVyxNQUFNLE1BQU0sOENBQThDO0FBQUEsTUFDekUsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1AsaUJBQWlCLFVBQVUsY0FBYztB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
