import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const productsData: Record<string, any> = {
  "1": {
    name: "Olympic Barbell Set",
    price: "$899",
    category: "Barbells & Weights",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    description: "Professional 45lb Olympic barbell with 300lb weight plate set. Commercial-grade steel construction with chrome finish.",
    features: ["45lb Olympic barbell", "300lb weight plate set", "Chrome finish", "Commercial-grade steel", "Standard 2-inch sleeve diameter"],
    rating: 4.9
  },
  "2": {
    name: "Adjustable Dumbbells",
    price: "$599",
    category: "Dumbbells",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
    description: "Space-saving adjustable dumbbell set. Replaces 15 sets of weights with quick-adjust dial system from 5-52.5 lbs.",
    features: ["5-52.5 lb weight range", "Quick-adjust dial system", "Compact design", "Durable molding", "Anti-roll design"],
    rating: 4.8
  },
  "3": {
    name: "Power Rack Station",
    price: "$1,299",
    category: "Racks & Cages",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    description: "Heavy-duty power rack with pull-up bar and safety spotters. Perfect for squats, bench press, and more.",
    features: ["Heavy-duty steel frame", "Adjustable safety bars", "Multi-grip pull-up bar", "800lb weight capacity", "Plate storage pegs"],
    rating: 4.9
  },
  "4": {
    name: "Premium Bench Press",
    price: "$749",
    category: "Benches",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    description: "Adjustable FID bench with 7 back pad positions and 3 seat positions. Built for stability and comfort.",
    features: ["7 back pad positions", "3 seat positions", "1000lb capacity", "Thick padding", "Easy adjustment lever"],
    rating: 4.7
  },
  "5": {
    name: "Cable Crossover Machine",
    price: "$2,499",
    category: "Machines",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    description: "Commercial-grade dual adjustable pulley system. Smooth cable action with over 100 exercise possibilities.",
    features: ["Dual adjustable pulleys", "200lb weight stack", "19 cable positions", "Commercial bearings", "Multiple grip attachments"],
    rating: 5.0
  },
  "6": {
    name: "Kettlebell Set",
    price: "$399",
    category: "Kettlebells",
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=800&q=80",
    description: "Complete kettlebell set from 10-50 lbs. Cast iron construction with wide handles for comfortable grip.",
    features: ["10, 15, 20, 25, 35, 50 lb kettlebells", "Cast iron construction", "Wide handles", "Flat base design", "Powder coat finish"],
    rating: 4.8
  },
  "7": {
    name: "Commercial Treadmill",
    price: "$1,899",
    category: "Cardio Equipment",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957d212?w=800&q=80",
    description: "High-performance treadmill with powerful motor and cushioned deck. Features 15 incline levels and 12 pre-set programs.",
    features: ["3.5 HP motor", "0-12 MPH speed range", "15 incline levels", "12 workout programs", "Large LCD display", "Bluetooth connectivity"],
    rating: 4.7
  },
  "8": {
    name: "Rowing Machine Pro",
    price: "$1,249",
    category: "Cardio Equipment",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
    description: "Premium water resistance rowing machine with solid wood construction. Provides smooth, natural rowing experience.",
    features: ["Water resistance system", "Solid ash wood frame", "Ergonomic seat", "Performance monitor", "Foldable design", "300lb capacity"],
    rating: 4.9
  },
  "9": {
    name: "Hex Dumbbell Set",
    price: "$499",
    category: "Dumbbells",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=800&q=80",
    description: "Complete set of rubber hex dumbbells from 5-50 lbs. Anti-roll design with contoured chrome handles.",
    features: ["5-50 lb set (10 pairs)", "Rubber coated heads", "Chrome handles", "Anti-roll hex design", "Contoured grip"],
    rating: 4.6
  },
  "10": {
    name: "Resistance Band Set",
    price: "$79",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80",
    description: "Professional resistance band set with 5 levels of resistance. Includes door anchor, handles, and ankle straps.",
    features: ["5 resistance levels", "Door anchor included", "Padded handles", "Ankle straps", "Carrying bag", "Exercise guide"],
    rating: 4.5
  },
  "11": {
    name: "Exercise Bike Elite",
    price: "$899",
    category: "Cardio Equipment",
    image: "https://images.unsplash.com/photo-1617258683320-61900b281ced?w=800&q=80",
    description: "Indoor cycling bike with magnetic resistance and adjustable seat. Stream live classes with integrated tablet holder.",
    features: ["Magnetic resistance", "Adjustable seat & handlebars", "Belt drive system", "LCD monitor", "Tablet holder", "Water bottle holder"],
    rating: 4.7
  },
  "12": {
    name: "Olympic Weight Plates",
    price: "$549",
    category: "Barbells & Weights",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    description: "Premium cast iron Olympic weight plate set. 260 lbs total with rubber coating to protect floors and reduce noise.",
    features: ["260 lb set", "2-inch Olympic size", "Rubber coated", "Color-coded", "Grip handles", "Precise weight calibration"],
    rating: 4.8
  },
  "13": {
    name: "Wall-Mounted Pull-Up Bar",
    price: "$159",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
    description: "Heavy-duty wall-mounted pull-up bar with multiple grip positions. Perfect for pull-ups, chin-ups, and hanging exercises.",
    features: ["Multiple grip positions", "500lb capacity", "Powder-coated steel", "Wall mounting hardware", "Easy installation", "Non-slip grips"],
    rating: 4.6
  },
  "14": {
    name: "Premium Yoga Mat",
    price: "$89",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80",
    description: "Extra-thick yoga mat with superior cushioning and non-slip surface. Eco-friendly materials with carrying strap.",
    features: ["6mm thickness", "Non-slip texture", "Eco-friendly TPE material", "72\" x 24\" size", "Carrying strap", "Easy to clean"],
    rating: 4.7
  }
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData[id || "1"];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/catalog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Catalog
            </Button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img 
                src={product.image} 
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating}/5.0)</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-6">{product.price}</div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="w-full text-lg py-6">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}