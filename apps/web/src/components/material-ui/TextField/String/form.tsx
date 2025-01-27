import { z } from "zod";

export const textInputFieldSchema = z.object({
  textInputField: z.string().min(1),
});

export type TextInputFieldSchema = z.infer<typeof textInputFieldSchema>;
