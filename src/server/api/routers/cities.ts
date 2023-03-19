import { z } from "zod";
import {
  CITIES as LYON_CITIES,
  DISTRICTS as LYON_DISTRICTS,
} from "../../../data/data.lyon";
import { STATS as LYON_STATS } from "../../../data/data.lyon.stats";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const citiesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getStatByName: publicProcedure
    .input(z.object({ zone: z.string(), name: z.string() }))
    .query(({ input }) => {
      if (input.zone === "lyon")
        return LYON_STATS.filter((stat) => stat.name === input.name);
      return [];
    }),
  getStats: publicProcedure
    .input(z.object({ zone: z.string() }))
    .query(({ input }) => {
      if (input.zone === "lyon")
        return LYON_STATS.reduce<{ category: string; name: string }[]>(
          (acc, stat) => {
            if (
              acc.some(
                (e) => e.category === stat.category && e.name === stat.name
              )
            )
              return acc;
            return [...acc, { category: stat.category, name: stat.name }];
          },
          []
        );
      return [];
    }),
  // getCities: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.commune.findMany();
  // }),
  getMap: publicProcedure
    .input(z.object({ zone: z.string() }))
    .query(({ input }) => {
      if (input.zone === "lyon")
        return { cities: LYON_CITIES, districts: LYON_DISTRICTS };
      return { cities: [], districts: [] };
    }),
});
