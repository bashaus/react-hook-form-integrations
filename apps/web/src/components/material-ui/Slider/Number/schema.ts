import { z } from "zod";

export const muiSliderNumberSchema = z.object({
  muiSliderNumber: z.coerce.number().min(0).max(100),
});

export type MuiSliderNumberSchema = z.infer<typeof muiSliderNumberSchema>;
