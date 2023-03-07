import { createTRPCRouter } from "~/server/api/trpc";
import { communeRouter } from "~/server/api/routers/commune";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  commune: communeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
