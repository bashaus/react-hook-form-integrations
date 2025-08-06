import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiSelectSingleSchema = z.object({
  muiSelectSingle: z.enum(Season),
});

export type MuiSelectSingleSchema = z.infer<typeof muiSelectSingleSchema>;
