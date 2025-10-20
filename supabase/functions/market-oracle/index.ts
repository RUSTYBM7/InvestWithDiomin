import { serve } from "https://deno.land/std@0.195.0/http/server.ts";

interface MarketData {
  asset: string;
  price: number;
  change24h: number;
  timestamp: string;
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    // Fetch market data from CoinGecko and Alpha Vantage APIs
    const btcRes = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
    );
    const cryptoData = await btcRes.json();

    const marketData: MarketData[] = [
      {
        asset: "BTC",
        price: cryptoData.bitcoin?.usd || 0,
        change24h: cryptoData.bitcoin?.usd_24h_change || 0,
        timestamp: new Date().toISOString(),
      },
      {
        asset: "ETH",
        price: cryptoData.ethereum?.usd || 0,
        change24h: cryptoData.ethereum?.usd_24h_change || 0,
        timestamp: new Date().toISOString(),
      },
    ];

    // TODO: Add SPY & macro data from Alpha Vantage or similar

    return new Response(
      JSON.stringify({
        success: true,
        data: marketData,
        timestamp: new Date().toISOString(),
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Market oracle error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
