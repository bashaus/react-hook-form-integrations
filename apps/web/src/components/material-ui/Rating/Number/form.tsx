import { z } from "zod";

export const ratingNumberFieldSchema = z.object({
  ratingNumberField: z.coerce.number().min(1).max(5),
});

export type RatingNumberFieldSchema = z.infer<typeof ratingNumberFieldSchema>;
