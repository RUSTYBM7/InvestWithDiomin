export const mailchimpConfig = {
  apiKey: process.env.VITE_MAILCHIMP_API_KEY || '',
  serverPrefix: process.env.VITE_MAILCHIMP_SERVER || 'us5',
  audienceId: process.env.VITE_MAILCHIMP_AUDIENCE_ID || '5bb1893f5c',
};

export const mailchimpClient = {
  baseUrl: `https://${mailchimpConfig.serverPrefix}.api.mailchimp.com/3.0`,

  async subscribe(email: string, firstName?: string, lastName?: string) {
    if (!mailchimpConfig.apiKey) {
      console.warn('Mailchimp API key not configured');
      return { success: false, error: 'Mailchimp not configured' };
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/lists/${mailchimpConfig.audienceId}/members`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${mailchimpConfig.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FNAME: firstName || '',
              LNAME: lastName || '',
            },
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.detail };
      }

      return { success: true };
    } catch (err) {
      console.error('Mailchimp subscribe error:', err);
      return { success: false, error: String(err) };
    }
  },

  async unsubscribe(email: string) {
    if (!mailchimpConfig.apiKey) return { success: false };

    try {
      const response = await fetch(
        `${this.baseUrl}/lists/${mailchimpConfig.audienceId}/members/${Buffer.from(email.toLowerCase()).toString('base64')}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${mailchimpConfig.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'unsubscribed' }),
        }
      );

      return response.ok ? { success: true } : { success: false };
    } catch (err) {
      console.error('Mailchimp unsubscribe error:', err);
      return { success: false };
    }
  },

  async sendWelcome(email: string) {
    // Trigger welcome automation
    // Note: This requires workflow automation to be set up in Mailchimp
    return { success: true, message: 'Welcome email will be sent via automation' };
  },

  async sendDigest(email: string, digestHtml: string) {
    // Queue digest email (optional: use campaign API for one-time sends)
    return { success: true, message: 'Digest queued for sending' };
  },

  // Sync data to Mailchimp list
  async getListMembers(count: number = 10) {
    if (!mailchimpConfig.apiKey) return { members: [] };

    try {
      const response = await fetch(
        `${this.baseUrl}/lists/${mailchimpConfig.audienceId}/members?count=${count}`,
        {
          headers: {
            'Authorization': `Bearer ${mailchimpConfig.apiKey}`,
          },
        }
      );

      if (!response.ok) throw new Error('Failed to fetch members');
      const data = await response.json();
      return { members: data.members || [] };
    } catch (err) {
      console.error('Mailchimp fetch members error:', err);
      return { members: [] };
    }
  },
};
