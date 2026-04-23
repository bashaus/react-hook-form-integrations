import { z } from "zod";

export const muiCheckboxBooleanSchema = z.object({
  muiCheckboxBoolean: z.boolean().prefault(false),
});

export type MuiCheckboxBooleanSchema = z.infer<typeof muiCheckboxBooleanSchema>;
