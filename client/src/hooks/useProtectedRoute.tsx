import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export function useProtectedRoute(redirectTo: string = "/sign-in") {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate(`${redirectTo}?next=${window.location.pathname}`);
    }
  }, [user, loading, navigate, redirectTo]);

  return { user, loading };
}
