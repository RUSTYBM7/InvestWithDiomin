import { useState } from "react";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { LogOut, Send, TrendingUp, DollarSign, Star } from "lucide-react";
import { signOut } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function InsightsProtected() {
  const { user, loading } = useProtectedRoute();
  const navigate = useNavigate();
  const [aiMessage, setAiMessage] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: string; content: string }>>([
    { role: "assistant", content: "Hi! I'm your AI assistant. Ask me anything about your investments." },
  ]);
  const [completedChecklist, setCompletedChecklist] = useState<Set<string>>(new Set());

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      navigate("/sign-in", { replace: true });
      toast.success("Signed out successfully");
    } else {
      toast.error("Failed to sign out");
    }
  };

  const handleAiChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiMessage.trim()) return;

    setAiLoading(true);
    const userMsg = aiMessage;
    setAiMessage("");

    try {
      // Add user message to chat
      setChatMessages((prev) => [...prev, { role: "user", content: userMsg }]);

      // Call OpenAI API
      const response = await fetch("/api/v1/openai/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();
      setChatMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("AI error:", error);
      toast.error("Failed to get AI response");
    } finally {
      setAiLoading(false);
    }
  };

  const toggleChecklist = (item: string) => {
    setCompletedChecklist((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  const checklistItems = [
    "Complete your profile",
    "Link your bank account",
    "Set investment goals",
    "Review performance metrics",
    "Enable two-factor authentication",
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header with user info */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Insights Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back, <span className="font-semibold">{user?.email}</span>
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Getting Started Checklist */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  {completedChecklist.size}/{checklistItems.length} completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {checklistItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id={`check-${idx}`}
                        checked={completedChecklist.has(item)}
                        onChange={() => toggleChecklist(item)}
                        className="h-4 w-4 rounded border-border mt-1 cursor-pointer"
                      />
                      <label htmlFor={`check-${idx}`} className="text-sm text-muted-foreground cursor-pointer">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Positions Card */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">VTSAX</span>
                    <Badge variant="outline">$45,230</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">VTIAX</span>
                    <Badge variant="outline">$28,150</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">VBTLX</span>
                    <Badge variant="outline">$15,620</Badge>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold">Total</span>
                      <span className="font-bold">$89,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* P&L Card */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  7-Day P&L
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded p-3">
                    <div className="text-sm text-muted-foreground mb-2">Performance</div>
                    <div className="text-2xl font-bold text-green-600">+$2,340</div>
                    <div className="text-xs text-muted-foreground mt-1">+2.6% week-over-week</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Day gain</span>
                      <span className="text-green-600">+$420</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Month gain</span>
                      <span className="text-green-600">+$8,100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Watchlist */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  Watchlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { ticker: "SPY", price: "$450.25" },
                    { ticker: "QQQ", price: "$380.12" },
                    { ticker: "TSLA", price: "$245.80" },
                    { ticker: "AMZN", price: "$185.50" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm p-2 hover:bg-muted/50 rounded">
                      <span className="font-medium">{item.ticker}</span>
                      <span className="text-muted-foreground">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ask AI Panel */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Ask AI</CardTitle>
                <CardDescription>Get insights about your investments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Chat Messages */}
                <div className="bg-muted/30 rounded-lg p-4 h-64 overflow-y-auto space-y-3 mb-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`text-sm ${
                        msg.role === "user"
                          ? "ml-8 bg-primary text-primary-foreground rounded-lg p-3 text-right"
                          : "mr-8 bg-secondary text-secondary-foreground rounded-lg p-3"
                      }`}
                    >
                      {msg.content}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleAiChat} className="flex gap-2">
                  <Textarea
                    placeholder="Ask about your portfolio, market trends, or investment strategies..."
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    disabled={aiLoading}
                    className="resize-none"
                    rows={2}
                  />
                  <Button
                    type="submit"
                    disabled={aiLoading || !aiMessage.trim()}
                    size="sm"
                    className="self-end"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
