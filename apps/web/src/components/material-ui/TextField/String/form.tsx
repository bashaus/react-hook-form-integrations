import { z } from "zod";

export const textFieldStringFieldSchema = z.object({
  textFieldStringField: z.string().min(1),
});

export type TextFieldStringFieldSchema = z.infer<
  typeof textFieldStringFieldSchema
>;
