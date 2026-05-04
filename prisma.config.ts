import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Direct connection (port 5432) — used by Prisma CLI (migrate, generate, studio)
    url: env("DIRECT_URL"),
  },
});
