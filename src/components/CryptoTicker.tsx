import { useEffect, useState } from "react";

type Prices = { btc: number | null; eth: number | null };

export function CryptoTicker() {
  const [prices, setPrices] = useState<Prices>({ btc: null, eth: null });
  const [ts, setTs] = useState<string>("");

  const load = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
      );
      const json = await res.json();
      setPrices({ btc: json.bitcoin?.usd ?? null, eth: json.ethereum?.usd ?? null });
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

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground">BTC</span>
        <span>{prices.btc ? `$${prices.btc.toLocaleString()}` : "—"}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground">ETH</span>
        <span>{prices.eth ? `$${prices.eth.toLocaleString()}` : "—"}</span>
      </div>
      <span className="opacity-60">Updated {ts || "just now"}</span>
    </div>
  );
}
