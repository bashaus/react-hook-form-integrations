import { z } from "zod";

export const muiSwitchRequiredSchema = z.object({
  muiSwitchRequired: z.literal(true),
});

export type MuiSwitchRequiredSchema = z.infer<typeof muiSwitchRequiredSchema>;
