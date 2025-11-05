import { useState } from "react";
import { MediaLightbox } from "./MediaLightbox";

export function MediaFigure({ kind, src, alt, caption, credit, className }: { kind:'image'|'video'; src:string; alt:string; caption?:string; credit?:string; className?:string }){
  const [open,setOpen]=useState(false);
  return (
    <figure className={className}>
      {kind==='image' ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full cursor-zoom-in rounded-md object-cover"
          onClick={()=>setOpen(true)}
        />
      ) : (
        <div className="group relative cursor-pointer overflow-hidden rounded-md" onClick={()=>setOpen(true)}>
          <img src={`https://img.youtube.com/vi/${src.split('v=')[1]}/hqdefault.jpg`} alt={alt} className="w-full object-cover transition group-hover:brightness-90" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="rounded-full bg-black/60 px-4 py-2 text-white">Play</span>
          </div>
        </div>
      )}
      {(caption || credit) && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">{caption} {credit && <>· Credit: {credit}</>}</figcaption>
      )}
      <MediaLightbox open={open} onOpenChange={setOpen} kind={kind} src={kind==='video'?src:src} alt={alt} caption={caption} credit={credit} />
    </figure>
  );
}
