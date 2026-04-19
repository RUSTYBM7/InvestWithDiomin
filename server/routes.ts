import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInsightSchema, insertLeadSchema, insertMediaSchema, insertCatalogItemSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Insights API
  app.get("/api/insights", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const insights = await storage.getInsights(limit);
      res.json(insights);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch insights" });
    }
  });

  app.get("/api/insights/:slug", async (req, res) => {
    try {
      const insight = await storage.getInsightBySlug(req.params.slug);
      if (!insight) {
        return res.status(404).json({ error: "Insight not found" });
      }
      res.json(insight);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch insight" });
    }
  });

  app.post("/api/insights", async (req, res) => {
    try {
      const validatedData = insertInsightSchema.parse(req.body);
      const insight = await storage.createInsight(validatedData);
      res.status(201).json(insight);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to create insight" });
    }
  });

  // Media API
  app.get("/api/media", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const mediaItems = await storage.getMedia(limit);
      res.json(mediaItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch media" });
    }
  });

  app.post("/api/media", async (req, res) => {
    try {
      const validatedData = insertMediaSchema.parse(req.body);
      const mediaItem = await storage.createMedia(validatedData);
      res.status(201).json(mediaItem);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to create media" });
    }
  });

  // Leads API
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      res.status(201).json(lead);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to create lead" });
    }
  });

  // Catalog API
  app.get("/api/catalog", async (req, res) => {
    try {
      const items = await storage.getCatalogItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch catalog items" });
    }
  });

  app.get("/api/catalog/:slug", async (req, res) => {
    try {
      const item = await storage.getCatalogItemBySlug(req.params.slug);
      if (!item) {
        return res.status(404).json({ error: "Catalog item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch catalog item" });
    }
  });

  app.post("/api/catalog", async (req, res) => {
    try {
      const validatedData = insertCatalogItemSchema.parse(req.body);
      const item = await storage.createCatalogItem(validatedData);
      res.status(201).json(item);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to create catalog item" });
    }
  });

  // Newsletter Subscription API
  const handleNewsletterSubscription = async (req: any, res: any) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      // Send automated welcome email (placeholder - will be implemented with email integration)
      // Future: Send welcome email with personalized insights based on source and tags
      console.log(`[Newsletter] New subscriber: ${validatedData.email} from ${validatedData.source || 'website'}`);
      
      res.status(201).json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        subscription 
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      if (error.code === '23505') {
        return res.status(409).json({ 
          error: "Email already subscribed",
          message: "You're already on our list! Check your inbox for our latest insights."
        });
      }
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  };

  app.post("/api/newsletter", handleNewsletterSubscription);
  app.post("/api/newsletter/subscribe", handleNewsletterSubscription);

  const httpServer = createServer(app);
  return httpServer;
}
