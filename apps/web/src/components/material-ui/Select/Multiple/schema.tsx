import { z } from "zod";

import { Season } from "@/helpers/options";

export const selectMultipleFieldSchema = z.object({
  selectMultipleField: z.array(z.enum(Season)).min(1),
});

export type SelectMultipleFieldSchema = z.infer<
  typeof selectMultipleFieldSchema
>;
