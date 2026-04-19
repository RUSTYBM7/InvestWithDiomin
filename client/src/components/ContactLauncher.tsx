import { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, Send as SendIcon, X as XIcon, Linkedin, Sparkles, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
  </svg>
);

interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function ContactLauncher() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [showTyping, setShowTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'c' && (e.ctrlKey || e.metaKey)) setOpen(v => !v);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setUnread(false);
      if (messages.length === 0) {
        setTimeout(() => setShowTyping(true), 800);
        setTimeout(() => {
          setShowTyping(false);
          addBotMessage("👋 Hi! I'm here to help you with your wealth strategy. What brings you here today?");
        }, 2000);
      }
    } else {
      setShowTyping(false);
    }
  }, [open]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const message = inputValue.trim();
    setInputValue('');
    addUserMessage(message);

    if (!chatStarted) {
      setChatStarted(true);
      setTimeout(() => setShowTyping(true), 500);
      setTimeout(() => {
        setShowTyping(false);
        setShowEmailCapture(true);
        addBotMessage("Great! I'd love to continue our conversation. May I have your name and email so I can send you personalized insights and follow up?");
      }, 1500);
    } else {
      setTimeout(() => setShowTyping(true), 300);
      setTimeout(() => {
        setShowTyping(false);
        addBotMessage("Thanks for your message! A member of our team will respond shortly. In the meantime, feel free to explore our insights or connect via WhatsApp for immediate assistance.");
      }, 1200);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) {
      toast.error("Please provide both your name and email");
      return;
    }

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: userEmail.trim(), 
          name: userName.trim(),
          source: 'live-chat'
        })
      });

      const data = await response.json();

      // Handle both success (201) and "already subscribed" (409) as success
      if (response.ok || response.status === 409) {
        toast.success(response.status === 409 
          ? "You're already subscribed! Check your inbox for our latest insights." 
          : `Welcome ${userName}! Check your email for exclusive insights.`);
        setShowEmailCapture(false);
        setTimeout(() => setShowTyping(true), 500);
        setTimeout(() => {
          setShowTyping(false);
          addBotMessage(`Perfect, ${userName}! ${response.status === 409 ? 'You\'re already on our list.' : 'I\'ve added you to our exclusive newsletter.'} You'll receive weekly insights on crypto strategies, DeFi opportunities, and wealth optimization. How else can I help you today?`);
        }, 1500);
      } else {
        toast.error(data.error || "Couldn't subscribe. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  const socialChannels = [
    { 
      name: "WhatsApp", 
      href: "https://wa.me/15092946731?text=Hello+Stephanie", 
      icon: WhatsAppIcon,
      color: "hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    { 
      name: "Messenger", 
      href: "https://m.me/investwithdiomin", 
      icon: MessengerIcon,
      color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/20",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com/investwithdiomin", 
      icon: Instagram,
      color: "hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/20",
      bgColor: "bg-pink-100 dark:bg-pink-900/20"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/stephaniediomin", 
      icon: Linkedin,
      color: "hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/20",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    { 
      name: "Email", 
      href: "mailto:book@investwithdiomin.today", 
      icon: Mail,
      color: "hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-950/20",
      bgColor: "bg-gray-100 dark:bg-gray-900/20"
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button 
        aria-label="Open contact" 
        onClick={() => setOpen(v => !v)} 
        className="relative rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-xl transition-all hover:scale-110 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-95"
        data-testid="button-chat-launcher"
      >
        {unread && (
          <span 
            className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-pulse rounded-full bg-red-500 ring-2 ring-background" 
            aria-hidden="true"
          />
        )}
        <MessageCircle className="m-4 h-6 w-6" />
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.aside
            role="dialog"
            aria-label="Contact panel"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[380px] overflow-hidden rounded-2xl border border-border/50 bg-background shadow-2xl backdrop-blur-sm"
            data-testid="dialog-chat"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">Invest With Diomin</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" aria-label="Online" />
                    Typically replies within an hour
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-muted"
                aria-label="Close"
                data-testid="button-close-chat"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Body - Chat Messages */}
            <div className="flex h-[420px] flex-col">
              {/* Messages Container */}
              <div className="flex-1 space-y-4 overflow-auto p-5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`mt-1 h-8 w-8 rounded-full ${msg.sender === 'bot' ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-primary/10'} p-0.5 flex-shrink-0`}>
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                        {msg.sender === 'bot' ? (
                          <Sparkles className="h-4 w-4 text-primary" />
                        ) : (
                          <User className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`rounded-2xl px-4 py-3 ${msg.sender === 'bot' ? 'rounded-tl-sm bg-muted' : 'rounded-tr-sm bg-primary text-primary-foreground'}`}>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                      <div className={`mt-1 text-xs text-muted-foreground ${msg.sender === 'user' ? 'text-right' : ''}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Email Capture Form */}
                {showEmailCapture && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-4"
                  >
                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                      <div className="text-sm font-medium">Join Our Newsletter</div>
                      <Input
                        placeholder="Your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-background"
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="bg-background"
                        required
                      />
                      <Button type="submit" className="w-full" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Subscribe & Continue
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* Typing indicator */}
                <AnimatePresence>
                  {showTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0ms' }} />
                          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '150ms' }} />
                          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Social Media Quick Links - Smaller */}
              {messages.length > 0 && (
                <div className="border-t bg-muted/20 px-5 py-2">
                  <div className="mb-1 text-xs text-muted-foreground">Or connect via:</div>
                  <div className="flex flex-wrap items-center gap-2">
                    {socialChannels.map((channel) => {
                      const Icon = channel.icon;
                      return (
                        <a
                          key={channel.name}
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center gap-1.5 rounded-lg border border-border/50 px-2 py-1.5 text-xs transition-all ${channel.color}`}
                          aria-label={`Contact via ${channel.name}`}
                          data-testid={`link-${channel.name.toLowerCase()}`}
                          title={channel.name}
                        >
                          <div className={`flex h-6 w-6 items-center justify-center rounded-full ${channel.bgColor}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Separator />

            {/* Message Input */}
            <form
              className="flex items-center gap-2 border-t bg-background p-4"
              onSubmit={handleSendMessage}
            >
              <input
                className="flex-1 rounded-lg border border-border bg-muted/30 px-4 py-2.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                placeholder="Type your message here..."
                aria-label="Message"
                data-testid="input-chat-message"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-md hover:shadow-lg hover:scale-105 transition-transform" 
                aria-label="Send"
                data-testid="button-send-message"
                disabled={!inputValue.trim()}
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>

            {/* Footer hint */}
            <div className="border-t bg-muted/20 px-4 py-2 text-center text-xs text-muted-foreground">
              Press <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">Ctrl+C</kbd> to toggle chat
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
