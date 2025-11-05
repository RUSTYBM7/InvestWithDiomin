import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { track } from "@/integrations/analytics";

type Props = { open: boolean; onOpenChange: (v:boolean)=>void; kind: 'image'|'video'; src: string; alt?: string; caption?: string; credit?: string };

export function MediaLightbox({ open, onOpenChange, kind, src, alt, caption, credit }: Props){
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{ if(e.key==='Escape') onOpenChange(false); };
    window.addEventListener('keydown', onKey); return ()=>window.removeEventListener('keydown', onKey);
  },[onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0">
        <div className="relative">
          {kind==='image' ? (
            <img src={src} alt={alt||''} className="max-h-[80vh] w-full object-contain" loading="eager" />
          ) : (
            <video
              src={src}
              className="max-h-[80vh] w-full"
              controls
              autoPlay
              onPlay={()=>track('video_play',{src})}
              onPause={()=>track('video_pause',{src})}
              onEnded={()=>track('video_end',{src})}
            />
          )}
          {(caption || credit) && (
            <p className="px-4 py-2 text-center text-xs text-muted-foreground">
              {caption} {credit && <> · Credit: {credit}</>}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
