export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata?: {
      role?: "SUPER_ADMIN" | "ADMIN" | "EDITOR";
    };
  }
}
