import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Subscribe to Supabase
      const { error: supabaseError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.toLowerCase().trim() });

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          toast.error("You're already subscribed!");
        } else {
          throw supabaseError;
        }
      } else {
        // Subscribe to Mailchimp
        const mailchimpSuccess = await subscribeToMailchimp(email);

        if (mailchimpSuccess) {
          toast.success("Successfully subscribed! Check your inbox for welcome email.");
          setEmail("");
        } else {
          toast.success("Subscribed to Supabase (Mailchimp sync in progress)");
          setEmail("");
        }
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="flex-1"
      />
      <Button type="submit" disabled={isLoading} size="lg">
        <Mail className="mr-2 h-5 w-5" />
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}