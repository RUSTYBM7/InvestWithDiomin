import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="text-center space-y-6 max-w-md">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto" />
        
        <div>
          <h1 className="text-5xl font-bold text-foreground mb-2">404</h1>
          <p className="text-muted-foreground">Page not found</p>
        </div>

        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. The path was:
        </p>
        
        <code className="block bg-muted p-3 rounded text-sm text-muted-foreground border border-border">
          {location.pathname}
        </code>

        <div className="space-y-3">
          <Link to="/" className="block">
            <Button className="w-full">Return to Home</Button>
          </Link>
          <Link to="/contact" className="block">
            <Button variant="outline" className="w-full">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}