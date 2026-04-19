export const supabase = {
    auth: {
        getSession: async () => ({ data: { session: null } }),
        signInWithOtp: async () => ({ error: null }),
        signInWithOAuth: async () => ({ error: null }),
        signOut: async () => ({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    },
    from: (_table: string) => ({
        select: () => ({
            eq: () => ({
                single: async () => ({ data: null, error: null }),
                maybeSingle: async () => ({ data: null, error: null }),
                order: async () => ({ data: [], error: null })
            }),
            order: () => ({ data: [], error: null }),
        }),
        insert: async (_data: unknown) => ({ data: null, error: null }),
        update: (_data: unknown) => ({
            eq: async () => ({ data: null, error: null })
        }),
        delete: () => ({
            eq: async () => ({ data: null, error: null })
        })
    })
};
