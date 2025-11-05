import Footer from "@/components/Footer";

export default function AdvisoryWorkshops() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Workshops</h1>
          <p className="text-lg text-muted-foreground">
            Cohort-based workshops covering leverage design, recovery runbooks, tokenization, and custody hygiene with checklists and simulations.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
