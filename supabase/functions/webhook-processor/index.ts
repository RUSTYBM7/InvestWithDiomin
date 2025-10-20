import { serve } from "https://deno.land/std@0.195.0/http/server.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    const { source, event, data } = payload;

    if (source === "hubspot") {
      // Process HubSpot webhook
      if (event === "contact.creation") {
        // Save to leads
        await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            source: "hubspot",
            event: "contact_created",
          }),
        });
      }
    } else if (source === "mailchimp") {
      // Process Mailchimp webhook
      if (event === "subscribe") {
        // Log subscription
        console.log("New Mailchimp subscriber:", data.email);
      } else if (event === "unsubscribe") {
        // Mark as unsubscribed in DB
        console.log("Mailchimp unsubscribe:", data.email);
      }
    }

    // Audit log
    await fetch(`${supabaseUrl}/rest/v1/audit_logs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "webhook_processed",
        entity_type: source,
        entity_id: data.id || data.email,
        changes: payload,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, processed: true }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
