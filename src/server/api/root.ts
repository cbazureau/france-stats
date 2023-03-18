import { createTRPCRouter } from "~/server/api/trpc";
import { citiesRouter } from "~/server/api/routers/cities";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  cities: citiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
