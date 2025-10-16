import { Navigation } from "../components/Navigation";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
  },
  {
    id: 7,
    name: "Commercial Treadmill",
    price: "$1,899",
    category: "Cardio Equipment",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957d212?w=800&q=80"
  },
  {
    id: 8,
    name: "Rowing Machine Pro",
    price: "$1,249",
    category: "Cardio Equipment",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80"
  },
  {
    id: 9,
    name: "Hex Dumbbell Set",
    price: "$499",
    category: "Dumbbells",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=800&q=80"
  },
  {
    id: 10,
    name: "Resistance Band Set",
    price: "$79",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80"
  },
  {
    id: 11,
    name: "Exercise Bike Elite",
    price: "$899",
    category: "Cardio Equipment",
    image: "https://images.unsplash.com/photo-1617258683320-61900b281ced?w=800&q=80"
  },
  {
    id: 12,
    name: "Olympic Weight Plates",
    price: "$549",
    category: "Barbells & Weights",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
  },
  {
    id: 13,
    name: "Wall-Mounted Pull-Up Bar",
    price: "$159",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
  },
  {
    id: 14,
    name: "Premium Yoga Mat",
    price: "$89",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80"
  }
];

export default function Catalog() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Equipment Catalog</h1>
            <p className="text-xl text-muted-foreground">
              Browse our complete collection of professional gym equipment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}