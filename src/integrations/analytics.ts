export const analyticsEvents = {
  // Lead generation events
  leadSubmit: (source: string, medium: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'lead_submit', {
      event_category: 'leads',
      event_label: source,
      user_value: medium,
    });
    fbq?.('track', 'Lead', { content_name: source });
  },

  // Catalog download
  catalogDownload: (email: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'catalog_download', {
      event_category: 'downloads',
      event_label: 'investment_catalog',
    });
    fbq?.('track', 'ViewContent', { content_name: 'Catalog' });
  },

  // Booking clicks
  bookingClick: (type: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'book_click', {
      event_category: 'bookings',
      event_label: type,
    });
  },

  // Calculator runs
  calcRun: (calculatorType: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'calc_run', {
      event_category: 'tools',
      event_label: calculatorType,
    });
  },

  // Scroll depth tracking
  scrollDepth: (depth: number) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${depth}%`,
    });
  },

  // Chat interactions
  chatInteraction: (message: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'chat_interaction', {
      event_category: 'engagement',
      event_label: 'ai_chat',
    });
  },

  // Newsletter signup
  newsletterSignup: (email: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'sign_up', {
      event_category: 'signups',
      method: 'newsletter',
    });
    fbq?.('track', 'Subscribe', { content_name: 'Newsletter' });
  },

  // Page view with custom data
  pageView: (pageName: string, pageType: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('config', 'G-XXXXXXXXXX', {
      page_title: pageName,
      page_path: window.location.pathname,
    });
  },

  // Real estate property view
  propertyView: (propertySlug: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'view_property', {
      event_category: 'real_estate',
      event_label: propertySlug,
    });
  },

  // Article view
  articleView: (articleSlug: string) => {
    if (typeof window === 'undefined') return;
    gtag?.('event', 'view_article', {
      event_category: 'content',
      event_label: articleSlug,
    });
  },
};

// Setup GA4 and Meta Pixel on window
declare global {
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
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
    function gtag(...args: any[]) {
      window.dataLayer?.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', ga4Id);
  }

  // Meta Pixel
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (pixelId) {
    // eslint-disable-next-line no-eval
    eval(`!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');`);
  }
};
