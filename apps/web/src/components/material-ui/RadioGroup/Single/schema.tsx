import { z } from "zod";

import { Season } from "@/helpers/options";

export const radioGroupFieldSchema = z.object({
  radioGroupField: z.enum(Season),
});

export type RadioGroupFieldSchema = z.infer<typeof radioGroupFieldSchema>;
