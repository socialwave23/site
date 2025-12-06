import { type User, type InsertUser, type ContactMessage, type InsertContactMessage, type PortfolioItem } from "@shared/schema";
import { randomUUID } from "crypto";

const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: '1',
    client: 'Gusto Italiano',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800',
    result: '+200% Prenotazioni'
  },
  {
    id: '2',
    client: 'Urban Style',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800',
    result: 'Rebranding Completo'
  },
  {
    id: '3',
    client: 'TechStart',
    category: 'Tech & B2B',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800',
    result: 'Lead Generation'
  },
  {
    id: '4',
    client: 'EcoBeauty',
    category: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800',
    result: 'Viral TikTok Campaign'
  },
  {
    id: '5',
    client: 'Fitness Pro',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    result: 'Community Building'
  },
  {
    id: '6',
    client: 'Design Studio',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
    result: 'Instagram Growth'
  }
];

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;
  private portfolioItems: Map<string, PortfolioItem>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.portfolioItems = new Map();
    
    defaultPortfolioItems.forEach(item => {
      this.portfolioItems.set(item.id, item);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    if (category === 'Tutti' || !category) {
      return this.getPortfolioItems();
    }
    return Array.from(this.portfolioItems.values()).filter(
      item => item.category === category
    );
  }
}

export const storage = new MemStorage();
