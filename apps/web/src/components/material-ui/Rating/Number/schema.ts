import { z } from "zod";

export const muiRatingNumberSchema = z.object({
  muiRatingNumber: z.coerce.number().min(1).max(5),
});

export type MuiRatingNumberSchema = z.infer<typeof muiRatingNumberSchema>;
