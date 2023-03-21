import { z } from "zod";
import {
  CITIES as LYON_CITIES,
  DISTRICTS as LYON_DISTRICTS,
} from "../../../data/data.lyon";
import {
  STATS as LYON_STATS,
  STATS_TYPE as LYON_STATS_TYPE,
} from "../../../data/data.lyon.stats";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getEnrichedStats } from "../utils";

export const citiesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getStatById: publicProcedure
    .input(z.object({ zone: z.string(), id: z.number() }))
    .query(({ input }) => {
      if (input.zone === "lyon")
        return getEnrichedStats(LYON_STATS, LYON_STATS_TYPE, input.id);
      return [];
    }),
  getStats: publicProcedure
    .input(z.object({ zone: z.string() }))
    .query(({ input }) => {
      if (input.zone === "lyon") return LYON_STATS_TYPE;
      return [];
    }),
  getMap: publicProcedure
    .input(z.object({ zone: z.string() }))
    .query(({ input }) => {
      if (input.zone === "lyon")
        return { cities: LYON_CITIES, districts: LYON_DISTRICTS };
      return { cities: [], districts: [] };
    }),
});
