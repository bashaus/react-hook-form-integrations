import { z } from "zod";

import { coerceUndefinedToFalse } from "@/resolvers/zod/coerce";

export const checkboxBooleanFieldSchema = z.object({
  checkboxBooleanField: z.preprocess(coerceUndefinedToFalse, z.boolean()),
});

export type CheckboxBooleanFieldSchema = z.infer<
  typeof checkboxBooleanFieldSchema
>;
