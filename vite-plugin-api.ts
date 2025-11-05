import type { Plugin } from "vite";
import { handleOpenAIRequest } from "./src/routes/api-openai";

export function vitePluginApi(): Plugin {
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
                const data = JSON.parse(body);
                const result = await handleOpenAIRequest(data);

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
    },
  };
}
