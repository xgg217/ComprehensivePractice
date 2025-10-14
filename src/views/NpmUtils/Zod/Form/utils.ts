import * as z from "zod";

export const check = z.object({
  name: z.string(),
  xp: z.number(),
});

export type Player = z.infer<typeof check>;
