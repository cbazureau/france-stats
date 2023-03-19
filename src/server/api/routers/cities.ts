import { z } from "zod";
import {
  CITIES as LYON_CITIES,
  DISTRICTS as LYON_DISTRICTS,
} from "../../../data/data.lyon";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const citiesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
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
