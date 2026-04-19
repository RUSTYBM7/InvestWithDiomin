export interface AuthUser {
  id: string;
  email: string;
  user_metadata?: Record<string, any>;
}

export const supabase = {
    auth: {
        getSession: async () => ({ data: { session: null } }),
        signInWithOtp: async () => ({ error: null }),
        signInWithOAuth: async () => ({ error: null }),
        signOut: async () => ({ error: null }),
        onAuthStateChange: (callback: any) => {
            return { data: { subscription: { unsubscribe: () => {} } } };
        }
    },
    from: () => ({
        select: () => ({
            eq: () => ({
                single: async () => ({ data: null, error: null }),
                maybeSingle: async () => ({ data: null, error: null }),
                order: async () => ({ data: [], error: null })
            }),
            order: () => ({ data: [], error: null }),
             insert: async () => ({ data: null, error: null }),
             update: async () => ({ data: null, error: null }),
             delete: async () => ({ data: null, error: null })
        })
    })
};

export async function getCurrentUser(): Promise<AuthUser | null> {
  return null; // Always logged out for mockup
}

export async function signInWithEmail(email: string) {
    console.log("Mock sign in with email", email);
    return { success: true };
}

export async function signInWithGoogle() {
    console.log("Mock sign in with google");
    return { success: true };
}

export async function signOut() {
    console.log("Mock sign out");
    return { success: true };
}

export function onAuthStateChange(callback: (user: AuthUser | null) => void) {
    // callback(null);
    return { unsubscribe: () => {} };
}