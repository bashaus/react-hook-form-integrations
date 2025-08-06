import { z } from "zod";

export const muiCheckboxRequiredSchema = z.object({
  muiCheckboxRequired: z.literal(true),
});

export type MuiCheckboxRequiredSchema = z.infer<
  typeof muiCheckboxRequiredSchema
>;
