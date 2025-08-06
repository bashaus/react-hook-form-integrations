import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiSelectMultipleSchema = z.object({
  muiSelectMultiple: z.array(z.enum(Season)).min(1),
});

export type MuiSelectMultipleSchema = z.infer<typeof muiSelectMultipleSchema>;
