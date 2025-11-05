import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Small delay to allow Supabase to process the session
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const nextPath = searchParams.get("next") || "/insights";
        navigate(nextPath, { replace: true });
      } catch (error) {
        console.error("Callback error:", error);
        navigate("/sign-in", { replace: true });
      }
    };

    handleCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <Card className="p-8">
        <div className="text-center space-y-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="text-muted-foreground">Signing you in...</p>
        </div>
      </Card>
    </div>
  );
}
