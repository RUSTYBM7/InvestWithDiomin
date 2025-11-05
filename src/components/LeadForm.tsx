import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { toast } from "sonner";

export default function LeadForm() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: form.name || null,
        email: form.email.toLowerCase().trim(),
        message: form.message || null,
        source: "contact_page",
      });
      if (error) throw error;
      await subscribeToMailchimp(form.email, form.name.split(" ")[0]);
      setOpen(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Lead submit error", err);
      toast.error("Could not submit lead. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <Input
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            disabled={isLoading}
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <Textarea
            placeholder="How can we help? (recovery, leverage, tokenization, etc.)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            disabled={isLoading}
          />
        </div>
        <Button type="submit" size="lg" disabled={isLoading} className="w-full md:w-auto">{isLoading ? "Submitting..." : "Submit"}</Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you!</DialogTitle>
            <DialogDescription>
              Your request has been received. Well follow up by email within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
