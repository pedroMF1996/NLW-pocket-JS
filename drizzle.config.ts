import { defineConfig } from "drizzle-kit";
import { env } from './serve/src/env'

export default defineConfig({
	schema: "./db/schema.ts",
	out: "./migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
