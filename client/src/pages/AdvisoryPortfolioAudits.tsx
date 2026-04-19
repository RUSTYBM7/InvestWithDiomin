import Footer from "@/components/Footer";

export default function AdvisoryPortfolioAudits() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Portfolio Audits</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive diagnostics across wallets, exchanges, and DeFi: risk, fees, slippage, funding exposure, and compliance evidence with clear recommendations.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
