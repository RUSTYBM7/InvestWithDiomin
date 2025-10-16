import { UserPlus, DollarSign, TrendingUp, Headphones } from "lucide-react";

const benefits = [
  {
    icon: UserPlus,
    title: "Easy Onboarding",
    description: "Streamlined hiring process"
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    description: "Automated & accurate payments"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Real-time analytics & reviews"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert HR assistance anytime"
  }
];

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}