import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorPageProps {
  statusCode?: number;
  message?: string;
}

export default function ErrorPage({
  statusCode = 500,
  message = "Internal Server Error",
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="text-center space-y-6 max-w-md">
        <AlertTriangle className="h-16 w-16 text-destructive mx-auto" />

        <div>
          <h1 className="text-5xl font-bold text-foreground mb-2">
            {statusCode}
          </h1>
          <p className="text-muted-foreground">{message}</p>
        </div>

        <p className="text-muted-foreground">
          Something went wrong on our end. Please try again later or contact
          support if the problem persists.
        </p>

        <div className="space-y-3">
          <Link to="/" className="block">
            <Button className="w-full">Return to Home</Button>
          </Link>
          <Link to="/contact" className="block">
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="text-xs text-muted-foreground border-t border-border pt-4">
          <p>Error ID: {Date.now()}</p>
        </div>
      </div>
    </div>
  );
}
