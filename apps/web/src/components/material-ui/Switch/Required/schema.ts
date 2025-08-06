import { z } from "zod";

export const switchRequiredFieldSchema = z.object({
  switchRequiredField: z.literal(true),
});

export type SwitchRequiredFieldSchema = z.infer<
  typeof switchRequiredFieldSchema
>;
