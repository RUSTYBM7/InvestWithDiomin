import Footer from "@/components/Footer";

export default function AdvisoryCourses() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Courses</h1>
          <p className="text-lg text-muted-foreground">
            Self-paced programs on crypto literacy, tax-aware trading, DeFi yield, and portfolio telemetry with practical assignments and assessments.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
