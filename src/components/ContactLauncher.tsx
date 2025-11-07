import { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, PhoneCall, Send, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ContactLauncher(){
  const [open,setOpen]=useState(false);
  const [unread,setUnread]=useState(true);
  useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{ if(e.key==='c' && (e.ctrlKey||e.metaKey)) setOpen(v=>!v) }; window.addEventListener('keydown',handler); return ()=>window.removeEventListener('keydown',handler);
  },[]);
  useEffect(()=>{ if(open) setUnread(false); },[open]);

  const actions = [
    { label: "Instagram Chat", href: "https://instagram.com/stephaniediomin", icon: Instagram },
    { label: "WhatsApp", href: "https://wa.me/5092946731", icon: PhoneCall },
    { label: "Follow on X", href: "https://x.com/intent/follow?screen_name=Alvinadiomin", icon: XIcon },
    { label: "Email", href: "mailto:book@investwithdiomin.today", icon: Mail },
  ];
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button aria-label="Open contact" onClick={()=>setOpen(v=>!v)} className="relative rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
        {unread && <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-secondary ring-2 ring-primary-foreground" aria-hidden="true"/>}
        <MessageCircle className="m-3 h-6 w-6" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.aside
            role="dialog"
            aria-label="Contact panel"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mt-3 w-[360px] overflow-hidden rounded-2xl border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/20" aria-hidden="true" />
                <div>
                  <div className="text-sm font-medium">Invest With Diomin</div>
                  <div className="text-xs text-muted-foreground">We typically reply within an hour</div>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500" aria-label="Online" />
            </div>

            {/* Body */}
            <div className="max-h-96 space-y-4 overflow-auto p-4 text-sm">
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20" aria-hidden="true"/>
                <div className="rounded-2xl bg-muted px-3 py-2">Hi! How can we help you today?</div>
              </div>
              <div className="ml-8 text-xs text-muted-foreground">Choose a channel to continue the conversation.</div>
              <div className="grid gap-2">
                {actions.map((a) => {
                  const Icon = a.icon;
                  return (
                    <Button key={a.label} asChild variant="outline" className="justify-start">
                      <a href={a.href} target="_blank" rel="noopener noreferrer" aria-label={a.label}>
                        <Icon className="mr-2 h-4 w-4" /> {a.label}
                      </a>
                    </Button>
                  )
                })}
              </div>

              {/* Typing indicator */}
              <div className="ml-8 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/70" style={{animationDelay:'0ms'}}/>
                  <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/70" style={{animationDelay:'80ms'}}/>
                  <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/70" style={{animationDelay:'160ms'}}/>
                </span>
                Typing…
              </div>
            </div>

            <Separator />

            {/* Composer */}
            <form
              className="flex items-center gap-2 p-3"
              onSubmit={(e)=>{ e.preventDefault(); window.open('https://instagram.com/stephaniediomin','_blank','noopener,noreferrer'); }}
            >
              <input
                className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Write a message (opens Instagram)"
                aria-label="Message"
              />
              <Button type="submit" size="icon" variant="default" aria-label="Send">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}