import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";

export function AutomationFlyer() {
  const automations = [
    {
      icon: Mail,
      title: "Email Intelligence",
      description: "AI-powered newsletters synced with Mailchimp. Weekly digests auto-compiled from market insights.",
      status: "Active",
      metrics: "2,847 subscribers",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live dashboard tracking leads, conversions, and campaign performance across all channels.",
      status: "Live",
      metrics: "847 leads this month",
    },
    {
      icon: Users,
      title: "Lead Orchestration",
      description: "HubSpot + Supabase + Mailchimp pipeline. Leads auto-segmented and sequenced instantly.",
      status: "Active",
      metrics: "94% delivery rate",
    },
    {
      icon: Zap,
      title: "Smart Webhooks",
      description: "Every form submission triggers instant CRM sync, email sequences, and lead scoring.",
      status: "Active",
      metrics: "< 2s latency",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {automations.map((auto, index) => {
          const Icon = auto.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-primary/20 transition-all hover:shadow-lg hover:border-primary/40">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge className="animate-pulse">{auto.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{auto.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{auto.description}</p>
                  <div className="rounded-lg bg-muted/50 px-3 py-2 text-center text-xs font-mono font-semibold text-primary">
                    {auto.metrics}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
