import { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactLauncher(){
  const [open,setOpen]=useState(false);
  const [unread,setUnread]=useState(true);
  useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{ if(e.key==='c' && (e.ctrlKey||e.metaKey)) setOpen(v=>!v) }; window.addEventListener('keydown',handler); return ()=>window.removeEventListener('keydown',handler);
  },[]);
  useEffect(()=>{ if(open) setUnread(false); },[open]);
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button aria-label="Contact" onClick={()=>setOpen(v=>!v)} className="relative rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
        {unread && <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-secondary ring-2 ring-primary-foreground" aria-hidden="true"/>}
        <MessageCircle className="m-3 h-6 w-6" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mt-3 w-[320px] overflow-hidden rounded-2xl border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b bg-muted/40 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20" aria-hidden="true" />
                <div>
                  <div className="text-sm font-medium">Invest With Diomin</div>
                  <div className="text-xs text-muted-foreground">Typically replies within an hour</div>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500" aria-label="Online" />
            </div>
            <div className="max-h-80 space-y-3 overflow-auto p-3 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20" aria-hidden="true"/>
                <div className="rounded-2xl bg-muted px-3 py-2">Hi! How can we help you today?</div>
              </div>
              <div className="ml-8 text-xs text-muted-foreground">Choose a quick action below.</div>
              <div className="grid gap-2">
                <a className="rounded-lg border px-3 py-2 hover:bg-accent" href="https://instagram.com/stephaniediomin" target="_blank" rel="noopener noreferrer">
                  💬 Chat on Instagram
                </a>
                <a className="rounded-lg border px-3 py-2 hover:bg-accent" href="https://wa.me/5092946731" target="_blank" rel="noopener noreferrer">
                  📱 WhatsApp us
                </a>
                <a className="rounded-lg border px-3 py-2 hover:bg-accent" href="https://x.com/intent/follow?screen_name=Alvinadiomin" target="_blank" rel="noopener noreferrer">
                  ✖ Follow on X (@Alvinadiomin)
                </a>
                <a className="rounded-lg border px-3 py-2 hover:bg-accent" href="mailto:book@investwithdiomin.today">
                  ✉️ Email Stephanie
                </a>
              </div>
            </div>
            <div className="border-t p-3">
              <input
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Type here… (opens Instagram to chat)"
                onFocus={()=>window.open('https://instagram.com/stephaniediomin','_blank','noopener,noreferrer')}
                readOnly
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}