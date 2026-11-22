// HealthSure — Prisma Client Instance
// backend/src/db/prisma.ts

let prismaInstance: any = null;

export function getPrisma(): any {
  if (prismaInstance) return prismaInstance;

  if (process.env.DATABASE_URL) {
    try {
      // Dynamic require so missing client generation never crashes serverless cold start
      const { PrismaClient } = require('@prisma/client');
      prismaInstance = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
      });
      return prismaInstance;
    } catch (err) {
      console.warn('[Prisma] Initialization notice (using resilient in-memory store):', (err as any)?.message || err);
    }
  }

  return null;
}
