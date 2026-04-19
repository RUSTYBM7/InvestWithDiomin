import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, Mail, Users, Activity, Server, Shield, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AutomationFlyer() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const automations = [
    {
      icon: Mail,
      title: "Email Intelligence",
      description: "AI-powered newsletters synced with Mailchimp. Weekly digests auto-compiled from market insights.",
      status: "Active",
      metrics: "2,847 subscribers",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live dashboard tracking leads, conversions, and campaign performance across all channels.",
      status: "Live",
      metrics: "847 leads this month",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      icon: Users,
      title: "Lead Orchestration",
      description: "HubSpot + Supabase + Mailchimp pipeline. Leads auto-segmented and sequenced instantly.",
      status: "Active",
      metrics: "94% delivery rate",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Zap,
      title: "Smart Webhooks",
      description: "Every form submission triggers instant CRM sync, email sequences, and lead scoring.",
      status: "Active",
      metrics: "< 2s latency",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10"
    },
  ];

  return (
    <div className="space-y-8">
      {/* System Visualization */}
      <div className="relative rounded-xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Animated Flow Lines */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,50 Q 400,50 700,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary animate-pulse" />
                <circle cx="100" cy="50" r="4" className="fill-primary animate-ping" />
                <circle cx="700" cy="50" r="4" className="fill-primary animate-ping" style={{ animationDelay: "1s" }} />
            </svg>

            <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full bg-background border-2 flex items-center justify-center transition-colors duration-500 ${activeNode === 0 ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]" : "border-muted"}`}>
                    <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="h-0.5 w-16 bg-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary w-full -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
                <div className={`h-12 w-12 rounded-full bg-background border-2 flex items-center justify-center transition-colors duration-500 ${activeNode === 1 ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]" : "border-muted"}`}>
                    <Server className="h-6 w-6 text-primary" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Badge variant="outline" className="bg-background/80 backdrop-blur font-mono text-xs">
                    <Activity className="h-3 w-3 mr-1 animate-pulse text-green-500" />
                    SYSTEM ONLINE
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">Latency: 24ms</span>
            </div>

             <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full bg-background border-2 flex items-center justify-center transition-colors duration-500 ${activeNode === 2 ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]" : "border-muted"}`}>
                    <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="h-0.5 w-16 bg-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary w-full -translate-x-full animate-[shimmer_2s_infinite] delay-75" />
                </div>
                <div className={`h-12 w-12 rounded-full bg-background border-2 flex items-center justify-center transition-colors duration-500 ${activeNode === 3 ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]" : "border-muted"}`}>
                    <Zap className="h-6 w-6 text-primary" />
                </div>
            </div>
        </div>
      </div>

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
              <Card className={`border-border/50 transition-all hover:shadow-lg hover:border-primary/40 group overflow-hidden relative`}>
                <div className={`absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity`}>
                    <Icon className={`h-24 w-24 -mr-8 -mt-8 ${auto.color}`} />
                </div>
                <CardHeader className="pb-3 relative z-10">
                  <div className="mb-2 flex items-start justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${auto.bg} ${auto.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="animate-pulse bg-background/80 backdrop-blur border-primary/20">{auto.status}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold">{auto.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  <p className="text-sm text-muted-foreground leading-relaxed">{auto.description}</p>
                  <div className="flex items-center justify-between border-t border-border/50 pt-3">
                     <span className="text-xs font-medium text-muted-foreground">Performance</span>
                     <span className="text-xs font-mono font-bold text-primary">{auto.metrics}</span>
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