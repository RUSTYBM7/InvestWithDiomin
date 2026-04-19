const API_BASE = process.env.VITE_API_URL || 'https://investwithdiomin.today/api/v1';

export const apiClient = {
  // Posts API
  async getPosts(tag?: string, q?: string, page: number = 1) {
    const params = new URLSearchParams();
    if (tag) params.append('tag', tag);
    if (q) params.append('q', q);
    params.append('page', page.toString());
    
    const res = await fetch(`${API_BASE}/posts?${params}`);
    if (!res.ok) throw new Error(`Posts fetch failed: ${res.statusText}`);
    return res.json();
  },

  async getPost(slug: string) {
    const res = await fetch(`${API_BASE}/posts/${slug}`);
    if (!res.ok) throw new Error(`Post fetch failed: ${res.statusText}`);
    return res.json();
  },

  // Properties API
  async getProperties(state?: string, type?: string, status?: string) {
    const params = new URLSearchParams();
    if (state) params.append('state', state);
    if (type) params.append('type', type);
    if (status) params.append('status', status);
    
    const res = await fetch(`${API_BASE}/properties?${params}`);
    if (!res.ok) throw new Error(`Properties fetch failed: ${res.statusText}`);
    return res.json();
  },

  async getProperty(slug: string) {
    const res = await fetch(`${API_BASE}/properties/${slug}`);
    if (!res.ok) throw new Error(`Property fetch failed: ${res.statusText}`);
    return res.json();
  },

  // Digests API
  async getDigest(type: string) {
    const res = await fetch(`${API_BASE}/digests/${type}`);
    if (!res.ok) throw new Error(`Digest fetch failed: ${res.statusText}`);
    return res.json();
  },

  // Forms API
  async submitContact(data: { name: string; email: string; message: string }) {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Contact submit failed: ${res.statusText}`);
    return res.json();
  },

  async submitLead(data: { email: string; firstname?: string; source?: string; event?: string }) {
    const res = await fetch(`${API_BASE}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Lead submit failed: ${res.statusText}`);
    return res.json();
  },

  async requestCatalogSignedUrl(email: string) {
    const res = await fetch(`${API_BASE}/catalog/sign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error(`Catalog sign failed: ${res.statusText}`);
    return res.json();
  },

  // RSS & Sitemap
  async getRSS() {
    const res = await fetch(`${API_BASE}/rss`);
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.statusText}`);
    return res.text();
  },

  async getSitemap() {
    const res = await fetch(`${API_BASE}/sitemap`);
    if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.statusText}`);
    return res.text();
  },

  // Fintech API
  async getFinTechStatus() {
    const res = await fetch(`${API_BASE}/fintech/status`);
    if (!res.ok) throw new Error(`Fintech status failed: ${res.statusText}`);
    return res.json();
  },

  async getMarketOracle(assets: string[] = ['BTC', 'ETH', 'SPY']) {
    const params = new URLSearchParams();
    params.append('assets', assets.join(','));
    
    const res = await fetch(`${API_BASE}/fintech/oracle?${params}`);
    if (!res.ok) throw new Error(`Oracle fetch failed: ${res.statusText}`);
    return res.json();
  },

  // Webhooks (internal)
  async processWebhook(source: string, data: any) {
    const res = await fetch(`${API_BASE}/ops/webhooks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, ...data }),
    });
    if (!res.ok) throw new Error(`Webhook processing failed: ${res.statusText}`);
    return res.json();
  },

  // Admin Audit Logs
  async getAuditLogs(page: number = 1) {
    const res = await fetch(`${API_BASE}/admin/audits?page=${page}`);
    if (!res.ok) throw new Error(`Audit logs fetch failed: ${res.statusText}`);
    return res.json();
  },
};
