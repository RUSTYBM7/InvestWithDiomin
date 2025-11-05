import { useEffect, useState } from "react";

type Media = { type:'image'|'video'; src:string; alt?:string; caption?:string; credit?:string };

export function MediaHero({ tag, title, subtitle, cta }: { tag:string; title:string; subtitle:string; cta?: React.ReactNode }){
  const [media,setMedia]=useState<Media|null>(null);
  useEffect(()=>{
    fetch(`/api/v1/media?tag=${encodeURIComponent(tag)}`).then(r=>r.json()).then(j=>{
      const m=j.items?.[0]; if(m) setMedia({ type:m.type, src:m.src, alt:m.alt, caption:m.caption, credit:m.credit });
    }).catch(()=>setMedia(null));
  },[tag]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {media ? (
          media.type==='image' ? (
            <img src={media.src} alt={media.alt||''} className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <video className="h-full w-full object-cover" src={media.src} autoPlay muted loop playsInline />
          )
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>
      <div className="container mx-auto px-6 py-20 md:py-28 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto max-w-3xl text-white/90">{subtitle}</p>
        {cta && <div className="mt-6 flex items-center justify-center gap-3">{cta}</div>}
      </div>
    </section>
  );
}
