import { z } from "zod";

export const muiSliderRangeSchema = z.object({
  muiSliderRange: z.tuple([
    z.coerce.number().min(0).max(100),
    z.coerce.number().min(0).max(100),
  ]),
});

export type MuiSliderRangeSchema = z.infer<typeof muiSliderRangeSchema>;
