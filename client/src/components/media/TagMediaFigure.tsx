import { useEffect, useState } from "react";
import { MediaFigure } from "./MediaFigure";

type Media = { type:'image'|'video'; src:string; alt?:string; caption?:string; credit?:string };

export function TagMediaFigure({ tag, fallbackAlt, className }: { tag: string; fallbackAlt: string; className?: string }){
  const [m,setM]=useState<Media|null>(null);
  useEffect(()=>{
    fetch(`/api/v1/media?tag=${encodeURIComponent(tag)}`)
      .then(r=>r.json())
      .then(j=>{ const item=j.items?.[0]; if(item) setM({ type:item.type, src:item.src, alt:item.alt, caption:item.caption, credit:item.credit }); })
      .catch(()=>setM(null));
  },[tag]);
  if(!m) return null;
  return <MediaFigure kind={m.type} src={m.src} alt={m.alt||fallbackAlt} caption={m.caption} credit={m.credit} className={className} />
}
