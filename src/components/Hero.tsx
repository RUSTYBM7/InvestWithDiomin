import { Button } from "./ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Complete HR Solution</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Empower Your Workforce
          <span className="block text-primary mt-2">End-to-End Management</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Streamline HR operations from onboarding to performance reviews. 
          Manage your team efficiently with our comprehensive platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/catalog">
            <Button size="lg" className="text-lg px-8 py-6">
              View Employees
            </Button>
          </Link>
          <Link to="/catalog">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Explore Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}