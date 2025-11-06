import { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, PhoneCall } from "lucide-react";

export default function ContactLauncher(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{ if(e.key==='c' && (e.ctrlKey||e.metaKey)) setOpen(v=>!v) }; window.addEventListener('keydown',handler); return ()=>window.removeEventListener('keydown',handler);
  },[]);
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button aria-label="Contact" onClick={()=>setOpen(v=>!v)} className="rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
        <span className="sr-only">Open contact</span>
        <MessageCircle className="m-3 h-6 w-6" />
      </button>
      {open && (
        <div className="mt-3 w-56 rounded-lg border bg-background p-3 shadow-xl">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Connect with Stephanie</p>
          <div className="grid gap-2">
            <a className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted" href="https://instagram.com/stephaniediomin" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted" href="https://wa.me/5092946731" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <PhoneCall className="h-4 w-4" /> WhatsApp
            </a>
            <a className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted" href="https://x.com/intent/follow?screen_name=stephaniediomin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="X logo"><path fill="currentColor" d="M18.244 2H21l-6.5 7.429L22 22h-6.844l-5.34-6.516L3.6 22H1l7.143-8.163L2 2h6.844l4.84 6.094L18.244 2Zm-1.2 18h1.86L7.2 4h-1.86l11.704 16Z"/></svg>
              X (Twitter)
            </a>
            <a className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted" href="mailto:book@investwithdiomin.today" aria-label="Email">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
}