import { z } from "zod";

export const ratingFieldSchema = z.object({
  ratingField: z.coerce.number().min(1).max(5),
});

export type RatingFieldSchema = z.infer<typeof ratingFieldSchema>;
