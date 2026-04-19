import { 
  type User, 
  type InsertUser,
  type Insight,
  type InsertInsight,
  type Media,
  type InsertMedia,
  type Lead,
  type InsertLead,
  type CatalogItem,
  type InsertCatalogItem,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
  insights,
  media,
  leads,
  catalogItems,
  newsletterSubscriptions,
  users
} from "@shared/schema";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq, desc } from "drizzle-orm";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Insights
  getInsights(limit?: number): Promise<Insight[]>;
  getInsightBySlug(slug: string): Promise<Insight | undefined>;
  createInsight(insight: InsertInsight): Promise<Insight>;
  
  // Media
  getMedia(limit?: number): Promise<Media[]>;
  createMedia(mediaItem: InsertMedia): Promise<Media>;
  
  // Leads
  getLeads(): Promise<Lead[]>;
  createLead(lead: InsertLead): Promise<Lead>;
  
  // Catalog Items
  getCatalogItems(): Promise<CatalogItem[]>;
  getCatalogItemBySlug(slug: string): Promise<CatalogItem | undefined>;
  createCatalogItem(item: InsertCatalogItem): Promise<CatalogItem>;
  
  // Newsletter
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  // Insights
  async getInsights(limit: number = 20): Promise<Insight[]> {
    return await db.select().from(insights)
      .where(eq(insights.status, 'published'))
      .orderBy(desc(insights.publishedAt))
      .limit(limit);
  }

  async getInsightBySlug(slug: string): Promise<Insight | undefined> {
    const result = await db.select().from(insights).where(eq(insights.slug, slug)).limit(1);
    return result[0];
  }

  async createInsight(insight: InsertInsight): Promise<Insight> {
    const result = await db.insert(insights).values(insight).returning();
    return result[0];
  }

  // Media
  async getMedia(limit: number = 20): Promise<Media[]> {
    return await db.select().from(media)
      .orderBy(desc(media.createdAt))
      .limit(limit);
  }

  async createMedia(mediaItem: InsertMedia): Promise<Media> {
    const result = await db.insert(media).values(mediaItem).returning();
    return result[0];
  }

  // Leads
  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const updatedAt = new Date();
    const result = await db.insert(leads).values({ ...lead, updatedAt }).returning();
    return result[0];
  }

  // Catalog Items
  async getCatalogItems(): Promise<CatalogItem[]> {
    return await db.select().from(catalogItems)
      .where(eq(catalogItems.status, 'active'))
      .orderBy(desc(catalogItems.createdAt));
  }

  async getCatalogItemBySlug(slug: string): Promise<CatalogItem | undefined> {
    const result = await db.select().from(catalogItems).where(eq(catalogItems.slug, slug)).limit(1);
    return result[0];
  }

  async createCatalogItem(item: InsertCatalogItem): Promise<CatalogItem> {
    const updatedAt = new Date();
    const result = await db.insert(catalogItems).values({ ...item, updatedAt }).returning();
    return result[0];
  }

  // Newsletter
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const updatedAt = new Date();
    const result = await db.insert(newsletterSubscriptions).values({ ...subscription, updatedAt }).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
