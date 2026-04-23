import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiAutocompleteMultipleSchema = z.object({
  muiAutocompleteMultiple: z.array(z.enum(Season)).min(1).prefault([]),
});

export type MuiAutocompleteMultipleSchema = z.infer<
  typeof muiAutocompleteMultipleSchema
>;
