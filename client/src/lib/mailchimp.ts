const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER = import.meta.env.VITE_MAILCHIMP_SERVER;
const MAILCHIMP_AUDIENCE_ID = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;

export async function subscribeToMailchimp(email: string, firstName?: string) {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER || !MAILCHIMP_AUDIENCE_ID) {
    console.error("Mailchimp configuration missing. Please set VITE_MAILCHIMP_API_KEY, VITE_MAILCHIMP_SERVER, and VITE_MAILCHIMP_AUDIENCE_ID environment variables.");
    return false;
  }
  
  try {
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName || "",
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Mailchimp error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Mailchimp subscription failed:", error);
    return false;
  }
}
