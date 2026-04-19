import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Prices = { btc: number | null; eth: number | null };
type Changes = { btc: number | null; eth: number | null };

export function CryptoTicker({ className = "" }: { className?: string }) {
  const [prices, setPrices] = useState<Prices>({ btc: null, eth: null });
  const [changes, setChanges] = useState<Changes>({ btc: null, eth: null });
  const [ts, setTs] = useState<string>("");

  const load = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
      );
      const json = await res.json();
      setPrices({
        btc: json.bitcoin?.usd ?? null,
        eth: json.ethereum?.usd ?? null,
      });
      setChanges({
        btc: json.bitcoin?.usd_24h_change ?? null,
        eth: json.ethereum?.usd_24h_change ?? null,
      });
      setTs(new Date().toLocaleTimeString());
    } catch (e) {
      // silent fail
    }
  };

  useEffect(() => {
    load();
    const id = setInterval(load, 60000);
    return () => clearInterval(id);
  }, []);

  const formatPrice = (price: number | null) => {
    if (price === null) return "—";
    return `$${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const formatChange = (change: number | null) => {
    if (change === null) return null;
    return change.toFixed(2);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full glass-surface px-4 py-2",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground text-sm">BTC</span>
        <span className="text-sm text-muted-foreground">
          {formatPrice(prices.btc)}
        </span>
        {changes.btc !== null && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs",
              changes.btc >= 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {changes.btc >= 0 ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {formatChange(Math.abs(changes.btc))}%
          </span>
        )}
      </div>
      <div className="w-px h-4 bg-border" />
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground text-sm">ETH</span>
        <span className="text-sm text-muted-foreground">
          {formatPrice(prices.eth)}
        </span>
        {changes.eth !== null && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs",
              changes.eth >= 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {changes.eth >= 0 ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {formatChange(Math.abs(changes.eth))}%
          </span>
        )}
      </div>
      <span className="text-xs text-muted-foreground/60 hidden sm:inline">
        {ts || "Loading..."}
      </span>
    </div>
  );
}
