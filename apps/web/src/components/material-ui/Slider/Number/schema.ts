import { z } from "zod";

export const sliderNumberFieldSchema = z.object({
  sliderNumberField: z.coerce.number().min(0).max(100),
});

export type SliderNumberFieldSchema = z.infer<typeof sliderNumberFieldSchema>;
