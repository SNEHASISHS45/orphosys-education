import { auth } from "@clerk/nextjs/server";

export type Roles = "SUPER_ADMIN" | "ADMIN" | "EDITOR";

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata?.role === role;
};

export const getRole = async () => {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata?.role as Roles | undefined;
};
