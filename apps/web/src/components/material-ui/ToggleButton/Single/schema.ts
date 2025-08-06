import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiToggleButtonSchema = z.object({
  muiToggleButton: z.enum(Season),
});

export type MuiToggleButtonSchema = z.infer<typeof muiToggleButtonSchema>;
