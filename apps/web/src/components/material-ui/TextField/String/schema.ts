import { z } from "zod";

export const muiTextFieldStringSchema = z.object({
  muiTextFieldString: z.string().min(1),
});

export type MuiTextFieldStringSchema = z.infer<typeof muiTextFieldStringSchema>;
