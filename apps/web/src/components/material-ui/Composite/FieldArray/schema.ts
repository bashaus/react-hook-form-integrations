import { z } from "zod";

export const muiCompositeFieldArraySchema = z.object({
  muiCompositeFieldArray: z
    .array(
      z.object({
        fieldName: z.string().min(1),
      }),
    )
    .min(1),
});

export type MuiCompositeFieldArraySchema = z.infer<
  typeof muiCompositeFieldArraySchema
>;
