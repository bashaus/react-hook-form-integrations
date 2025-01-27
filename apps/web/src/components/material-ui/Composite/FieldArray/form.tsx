import { z } from "zod";

export const compositeFieldArrayFieldSchema = z.object({
  compositeFieldArrayField: z
    .array(
      z.object({
        fieldName: z.string().min(1),
      }),
    )
    .min(1),
});

export type CompositeFieldArrayFieldSchema = z.infer<
  typeof compositeFieldArrayFieldSchema
>;
