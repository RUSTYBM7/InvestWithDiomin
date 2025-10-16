import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { Benefits } from "../components/Benefits";

const products = [
  {
    id: 1,
    name: "Olympic Barbell Set",
    price: "$899",
    category: "Barbells & Weights",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Adjustable Dumbbells",
    price: "$599",
    category: "Dumbbells",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Power Rack Station",
    price: "$1,299",
    category: "Racks & Cages",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
  },
  {
    id: 4,
    name: "Premium Bench Press",
    price: "$749",
    category: "Benches",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  {
    id: 5,
    name: "Cable Crossover Machine",
    price: "$2,499",
    category: "Machines",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
  },
  {
    id: 6,
    name: "Kettlebell Set",
    price: "$399",
    category: "Kettlebells",
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=800&q=80"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation equipmentLink="/catalog" />
      <Hero />
      <Benefits />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Equipment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular professional-grade gym equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 IronForge. All rights reserved.</p>
          <p className="text-sm">Building champions, one rep at a time.</p>
        </div>
      </footer>
    </div>
  );
}