import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/index.js";

const createPrismaClient = () => {
  const adapter = new PrismaPg({
    // Transaction Mode (port 6543, pgbouncer) — optimal for serverless/edge runtime
    connectionString: process.env.DATABASE_URL,
  });

  return new PrismaClient({ adapter });
};

// Singleton: reuse client across hot-reloads in Next.js dev mode
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
