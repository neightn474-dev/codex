import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const dataFile = path.join(process.cwd(), "data", "store.json");

type LeadStage = "Discovery" | "Qualified" | "Matched" | "Closed";

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  company: string;
  title: string;
  email: string;
  hiringNeed: string;
  stage: LeadStage;
  status: string;
  urgency: string;
  summary: string;
};

export type Firm = {
  id: string;
  name: string;
  specialization: string;
  industries: string[];
  roles: string[];
  geography: string[];
  rating: number;
  velocity: string;
  review: string;
};

export type Session = {
  token: string;
  userId: string;
  email: string;
  name: string;
  role: string;
  expiresAt: string;
};

export type UserAccount = {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
};

export type StoreData = {
  leads: Lead[];
  firms: Firm[];
  sessions: Session[];
  users: UserAccount[];
  metrics: {
    leads: number;
    callsBooked: number;
    conversions: number;
    placements: number;
  };
};

async function readData(): Promise<StoreData> {
  try {
    const raw = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(raw) as StoreData;
  } catch {
    const initial: StoreData = {
      leads: [
        {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          name: "Aisha Nguyen",
          company: "Nova Labs",
          title: "Co-founder",
          email: "aisha@novalabs.com",
          hiringNeed: "Introduce us to partners for B2B SaaS growth and customer expansion.",
          stage: "Discovery",
          status: "New inquiry",
          urgency: "4 weeks",
          summary: "Seeking introductions to growth partners, advisors, and distribution channels in SaaS.",
        },
      ],
      firms: [
        {
          id: crypto.randomUUID(),
          name: "Catalyst Growth Partners",
          specialization: "Partnership and advisory connections",
          industries: ["SaaS", "Fintech", "AI"],
          roles: ["Advisor", "Channel Partner", "Growth Consultant"],
          geography: ["US", "EMEA"],
          rating: 4.9,
          velocity: "7-9 weeks",
          review: "Exceptional at connecting high-growth companies with the right advisory and channel relationships.",
        },
        {
          id: crypto.randomUUID(),
          name: "Apex Advisory Partners",
          specialization: "Scaling partnership ecosystems",
          industries: ["Healthtech", "Marketplaces"],
          roles: ["Advisor", "Technology Partner", "Commercial Partner"],
          geography: ["US", "APAC"],
          rating: 4.7,
          velocity: "8-10 weeks",
          review: "Data-driven evaluation and founder-centric partner strategy.",
        },
      ],
      sessions: [],
      users: [
        {
          id: "user-admin",
          name: "Olivia Chen",
          email: "olivia@boardroomconnect.com",
          role: "admin",
          password: "Executive2026!",
        },
      ],
      metrics: {
        leads: 24,
        callsBooked: 18,
        conversions: 12,
        placements: 6,
      },
    };
    await fs.mkdir(path.dirname(dataFile), { recursive: true });
    await fs.writeFile(dataFile, JSON.stringify(initial, null, 2), "utf-8");
    return initial;
  }
}

async function writeData(data: StoreData) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf-8");
}

export async function getLeads(): Promise<Lead[]> {
  const data = await readData();
  return data.leads.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addLead(leadData: Omit<Lead, "id" | "createdAt" | "status" | "stage">) {
  const data = await readData();
  const lead: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    stage: "Discovery",
    status: "New inquiry",
    ...leadData,
  };
  data.leads.unshift(lead);
  data.metrics.leads += 1;
  await writeData(data);
  return lead;
}

export async function updateLead(id: string, updates: Partial<Lead>) {
  const data = await readData();
  const leadIndex = data.leads.findIndex((item) => item.id === id);
  if (leadIndex === -1) return null;
  data.leads[leadIndex] = { ...data.leads[leadIndex], ...updates };
  await writeData(data);
  return data.leads[leadIndex];
}

export async function getFirms(): Promise<Firm[]> {
  const data = await readData();
  return data.firms;
}

export async function addFirm(firmData: Omit<Firm, "id">) {
  const data = await readData();
  const firm: Firm = { id: crypto.randomUUID(), ...firmData };
  data.firms.push(firm);
  await writeData(data);
  return firm;
}

export async function updateFirm(id: string, updates: Partial<Firm>) {
  const data = await readData();
  const index = data.firms.findIndex((item) => item.id === id);
  if (index === -1) return null;
  data.firms[index] = { ...data.firms[index], ...updates };
  await writeData(data);
  return data.firms[index];
}

export async function getAnalytics() {
  const data = await readData();
  return data.metrics;
}

export async function incrementMetric(metric: keyof StoreData["metrics"], amount = 1) {
  const data = await readData();
  if (data.metrics[metric] !== undefined) {
    data.metrics[metric] += amount;
    await writeData(data);
  }
}

export async function validateCredentials(email: string, password: string) {
  const data = await readData();
  return data.users.find((user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password) ?? null;
}

export async function createSession(user: UserAccount) {
  const data = await readData();
  const token = crypto.randomBytes(24).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString();
  const session: Session = {
    token,
    email: user.email,
    name: user.name,
    userId: user.id,
    role: user.role,
    expiresAt,
  };
  data.sessions = data.sessions.filter((item) => new Date(item.expiresAt) > new Date());
  data.sessions.push(session);
  await writeData(data);
  return session;
}

export async function getSession(token: string) {
  const data = await readData();
  const session = data.sessions.find((item) => item.token === token);
  if (!session || new Date(session.expiresAt) < new Date()) return null;
  return session;
}

export async function destroySession(token: string) {
  const data = await readData();
  data.sessions = data.sessions.filter((item) => item.token !== token);
  await writeData(data);
}

export async function getRecommendations(hiringNeed: string) {
  const data = await readData();
  const normalizedNeed = hiringNeed.toLowerCase();
  return data.firms
    .map((firm) => ({
      ...firm,
      score:
        (firm.specialization.toLowerCase().includes("advisor") ? 16 : 8) +
        (firm.industries.some((industry) => normalizedNeed.includes(industry.toLowerCase())) ? 12 : 0) +
        (firm.roles.some((role) => normalizedNeed.includes(role.toLowerCase())) ? 14 : 0) +
        Math.round(firm.rating * 6),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}
