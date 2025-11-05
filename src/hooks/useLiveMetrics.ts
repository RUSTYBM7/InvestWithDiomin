import { useEffect, useState } from "react";

type Metrics = { subscribers: string | number; posts: string | number };

export default function useLiveMetrics() {
  const [data, setData] = useState<Metrics>({ subscribers: "Loading...", posts: "Loading..." });

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const [mcRes, postRes] = await Promise.all([
          fetch("/api/mailchimp/audience").catch(() => null),
          fetch("/api/posts/count").catch(() => null),
        ]);

        let subscribers: string | number = "—";
        let posts: string | number = "—";

        if (mcRes && mcRes.ok) {
          const j = await mcRes.json();
          subscribers = j?.total_members ?? "—";
        }
        if (postRes && postRes.ok) {
          const j = await postRes.json();
          posts = j?.count ?? "—";
        }

        setData({ subscribers, posts });
      } catch (err) {
        setData({ subscribers: "Live metrics available after setup", posts: "Live metrics available after setup" });
      }
    }
    fetchMetrics();
  }, []);

  return data;
}
