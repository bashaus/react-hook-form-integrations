import { z } from "zod";

export const sliderRangeFieldSchema = z.object({
  sliderRangeField: z.tuple([
    z.coerce.number().min(0).max(100),
    z.coerce.number().min(0).max(100),
  ]),
});

export type SliderRangeFieldSchema = z.infer<typeof sliderRangeFieldSchema>;
