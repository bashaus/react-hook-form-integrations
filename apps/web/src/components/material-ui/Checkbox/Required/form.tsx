import { z } from "zod";

export const checkboxRequiredFieldSchema = z.object({
  checkboxRequiredField: z.literal(true),
});

export type CheckboxRequiredFieldSchema = z.infer<
  typeof checkboxRequiredFieldSchema
>;
