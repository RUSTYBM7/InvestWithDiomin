export interface Database {
  public: {
    Tables: {
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
        };
      };
      consultation_requests: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          message: string | null;
          preferred_date: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          message?: string | null;
          preferred_date?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          message?: string | null;
          preferred_date?: string | null;
          status?: string;
          created_at?: string;
        };
      };
      catalog_downloads: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          downloaded_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          downloaded_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          downloaded_at?: string;
        };
      };
      social_posts: {
        Row: {
          id: string;
          platform: string;
          post_url: string | null;
          caption: string | null;
          summary: string | null;
          media_url: string | null;
          posted_at: string | null;
          synced_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          platform: string;
          post_url?: string | null;
          caption?: string | null;
          summary?: string | null;
          media_url?: string | null;
          posted_at?: string | null;
          synced_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          platform?: string;
          post_url?: string | null;
          caption?: string | null;
          summary?: string | null;
          media_url?: string | null;
          posted_at?: string | null;
          synced_at?: string;
          created_at?: string;
        };
      };
    };
  };
}