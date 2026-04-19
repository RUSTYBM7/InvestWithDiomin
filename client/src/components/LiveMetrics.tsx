import useLiveMetrics from "@/hooks/useLiveMetrics";

export default function LiveMetrics() {
  const { subscribers, posts } = useLiveMetrics();
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs">
      <span className="rounded-full border px-3 py-1 text-muted-foreground">
        Subscribers: <span className="font-medium text-foreground">{subscribers}</span>
      </span>
      <span className="rounded-full border px-3 py-1 text-muted-foreground">
        New Insights (30d): <span className="font-medium text-foreground">{posts}</span>
      </span>
    </div>
  );
}
