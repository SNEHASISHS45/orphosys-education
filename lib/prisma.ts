import { PrismaClient } from "./generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "server-only";

const prismaClientSingleton = () => {
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool as any);
  return new PrismaClient({
    adapter: adapter as any, // Cast to any if types mismatch slightly across versions
    log: ["query"],
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma && (globalThis.prisma as any).program 
  ? globalThis.prisma 
  : prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
