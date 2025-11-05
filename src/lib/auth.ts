import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AuthUser {
  id: string;
  email: string;
  user_metadata?: Record<string, any>;
}

// Get current session
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return null;

    return {
      id: session.user.id,
      email: session.user.email || "",
      user_metadata: session.user.user_metadata,
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// Sign in with email magic link
export async function signInWithEmail(email: string) {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Sign in error:", error);
    return { success: false, error: String(error) };
  }
}

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Google sign in error:", error);
    return { success: false, error: String(error) };
  }
}

// Sign out
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Sign out error:", error);
    return { success: false, error: String(error) };
  }
}

// Listen to auth state changes
export function onAuthStateChange(
  callback: (user: AuthUser | null) => void
) {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      callback({
        id: session.user.id,
        email: session.user.email || "",
        user_metadata: session.user.user_metadata,
      });
    } else {
      callback(null);
    }
  });

  return subscription;
}
