import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (_req) => {
  return new Response(
    JSON.stringify({
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
});
