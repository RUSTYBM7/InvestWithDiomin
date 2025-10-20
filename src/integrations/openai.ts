const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY || '';
const OPENAI_BASE_URL = 'https://api.openai.com/v1';

export const openaiClient = {
  async summarizeText(text: string, maxLength: number = 150): Promise<string> {
    if (!OPENAI_API_KEY) {
      console.warn('OpenAI API key not configured');
      return text.substring(0, maxLength);
    }

    try {
      const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: 'You are a professional summarizer. Create concise, engaging summaries.',
            },
            {
              role: 'user',
              content: `Summarize this in ${maxLength} characters max: ${text}`,
            },
          ],
          temperature: 0.7,
          max_tokens: 100,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI error:', error);
        return text.substring(0, maxLength);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || text.substring(0, maxLength);
    } catch (err) {
      console.error('OpenAI summarize error:', err);
      return text.substring(0, maxLength);
    }
  },

  async generateChatResponse(message: string, context?: string): Promise<string> {
    if (!OPENAI_API_KEY) {
      return 'AI assistant temporarily unavailable. Please contact us at book@investwithdiomin.today';
    }

    try {
      const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: `You are Stephanie Diomin's AI assistant at Invest With Diomin. 
              You help answer questions about wealth strategy, tax optimization, real estate, fintech, and philanthropy.
              Be professional, concise, and actionable. Always recommend contacting book@investwithdiomin.today for personalized advice.
              ${context ? `Context: ${context}` : ''}`,
            },
            {
              role: 'user',
              content: message,
            },
          ],
          temperature: 0.8,
          max_tokens: 300,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI error:', error);
        return 'Unable to process your request. Please try again or contact us.';
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No response generated';
    } catch (err) {
      console.error('OpenAI chat error:', err);
      return 'An error occurred. Please try again.';
    }
  },

  async analyzeMarkets(assets: string[]): Promise<string> {
    if (!OPENAI_API_KEY) return 'Market analysis unavailable';

    try {
      const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: 'You are a wealth advisor providing brief market insights.',
            },
            {
              role: 'user',
              content: `Provide a brief analysis of these assets for wealth strategy: ${assets.join(', ')}`,
            },
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      });

      if (!response.ok) return 'Market analysis unavailable';

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Unable to generate analysis';
    } catch (err) {
      console.error('OpenAI market analysis error:', err);
      return 'Market analysis temporarily unavailable';
    }
  },

  async generateDigestIntro(topicsSummary: string): Promise<string> {
    if (!OPENAI_API_KEY) return 'This week in wealth strategy...';

    try {
      const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: 'Write an engaging 2-3 sentence intro for a wealth strategy newsletter.',
            },
            {
              role: 'user',
              content: `Create an intro for this week's topics: ${topicsSummary}`,
            },
          ],
          temperature: 0.8,
          max_tokens: 100,
        }),
      });

      if (!response.ok) return 'This week in wealth strategy...';

      const data = await response.json();
      return data.choices[0]?.message?.content || 'This week in wealth strategy...';
    } catch (err) {
      console.error('OpenAI digest intro error:', err);
      return 'This week in wealth strategy...';
    }
  },
};
