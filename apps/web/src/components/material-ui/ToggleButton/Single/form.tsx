import { z } from "zod";

import { Season } from "@/helpers/options";

export const toggleButtonFieldSchema = z.object({
  toggleButtonField: z.enum(Season),
});

export type ToggleButtonFieldSchema = z.infer<typeof toggleButtonFieldSchema>;
