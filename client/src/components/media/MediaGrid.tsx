import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MediaItem {
  id?: string;
  src: string;
  caption?: string;
  alt?: string;
  width?: number;
  height?: number;
  tags?: string[];
}

export function MediaGrid({ limit = 9 }: { limit?: number }) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<MediaItem | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch(`/api/v1/media`);
      const j = await r.json();
      const list = (j.items || []).slice(0, limit);
      setItems(list);
      if (!list.length) {
        await fetch(`/api/v1/media/pinterest-keyword-import`, { method: "POST" });
        const r2 = await fetch(`/api/v1/media`);
        const j2 = await r2.json();
        setItems((j2.items || []).slice(0, limit));
      }
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [limit]);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-lg border bg-background">
            <div className="aspect-square w-full bg-muted" />
            <div className="p-3">
              <div className="h-3 w-1/2 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <AnimatePresence>
          {items.map((m, i) => (
            <motion.button
              key={m.src + i}
              onClick={() => { setActive(m); setOpen(true); }}
              className="group overflow-hidden rounded-lg border bg-background"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              aria-label={m.caption || m.alt || "Open media"}
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={m.src}
                  alt={m.alt || m.caption || "Crypto finance visual"}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
              </div>
              {m.caption && (
                <div className="p-3 text-left text-xs text-muted-foreground">{m.caption}</div>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          {active && (
            <div className="w-full">
              <img
                src={active.src}
                alt={active.alt || active.caption || "Full media"}
                className="h-auto w-full rounded-md object-contain"
                crossOrigin="anonymous"
              />
              {active.caption && (
                <div className="mt-2 text-center text-xs text-muted-foreground">{active.caption}</div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}