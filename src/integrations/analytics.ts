export const analyticsEvents = {
  // Lead generation events
  leadSubmit: (source: string, medium: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'lead_submit', {
      event_category: 'leads',
      event_label: source,
      user_value: medium,
    });
    window.fbq?.('track', 'Lead', { content_name: source });
  },

  // Catalog download
  catalogDownload: (email: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'catalog_download', {
      event_category: 'downloads',
      event_label: 'investment_catalog',
    });
    window.fbq?.('track', 'ViewContent', { content_name: 'Catalog' });
  },

  // Booking clicks
  bookingClick: (type: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'book_click', {
      event_category: 'bookings',
      event_label: type,
    });
  },

  // Calculator runs
  calcRun: (calculatorType: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'calc_run', {
      event_category: 'tools',
      event_label: calculatorType,
    });
  },

  // Scroll depth tracking
  scrollDepth: (depth: number) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${depth}%`,
    });
  },

  // Chat interactions
  chatInteraction: (message: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'chat_interaction', {
      event_category: 'engagement',
      event_label: 'ai_chat',
    });
  },

  // Newsletter signup
  newsletterSignup: (email: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'sign_up', {
      event_category: 'signups',
      method: 'newsletter',
    });
    window.fbq?.('track', 'Subscribe', { content_name: 'Newsletter' });
  },

  // Page view with custom data
  pageView: (pageName: string, pageType: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('config', 'G-XXXXXXXXXX', {
      page_title: pageName,
      page_path: window.location.pathname,
    });
  },

  // Real estate property view
  propertyView: (propertySlug: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'view_property', {
      event_category: 'real_estate',
      event_label: propertySlug,
    });
  },

  // Article view
  articleView: (articleSlug: string) => {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', 'view_article', {
      event_category: 'content',
      event_label: articleSlug,
    });
  },
};

// Generic tracker
export function track(event: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', event, params || {});
  // Map a few events to Meta Pixel where appropriate
  if (event === 'catalog_download') window.fbq?.('track', 'ViewContent', { content_name: 'Catalog' });
  if (event === 'book_click') window.fbq?.('track', 'Contact');
}
// Setup GA4 and Meta Pixel on window
declare global {
  interface Window { dataLayer?: any[]; gtag?: (...args: any[]) => void; fbq?: (...args: any[]) => void; _fbq?: any }
}

export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  // GA4
  const ga4Id = import.meta.env.VITE_GA4_ID;
  if (ga4Id) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){ window.dataLayer?.push(arguments); } as any;
    window.gtag('js', new Date() as any);
    window.gtag('config', ga4Id);
  }

  // Meta Pixel (no eval)
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (pixelId) {
    // Initialize fbq shim
    if (window.fbq) return;
    const fbq: any = function() { (fbq as any).callMethod ? (fbq as any).callMethod.apply(fbq, arguments as any) : (fbq as any).queue.push(arguments); };
    (fbq as any).push = (fbq as any);
    (fbq as any).loaded = true;
    (fbq as any).version = '2.0';
    (fbq as any).queue = [];
    window.fbq = fbq;

    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const first = document.getElementsByTagName('script')[0];
    first?.parentNode?.insertBefore(s, first);

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }
};