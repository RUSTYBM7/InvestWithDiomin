import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id?: number;
  name: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
}

export function ProductCard({ id, name, price, category, image, featured }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {featured && (
          <Badge className="absolute top-4 left-4 z-10 bg-primary">
            Featured
          </Badge>
        )}
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/product/${id}`} className="w-full">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}