import { z } from "zod";

import { coerceUndefinedToFalse } from "@/resolvers/zod/coerce";

export const muiCheckboxBooleanSchema = z.object({
  muiCheckboxBoolean: z.preprocess(coerceUndefinedToFalse, z.boolean()),
});

export type MuiCheckboxBooleanSchema = z.infer<typeof muiCheckboxBooleanSchema>;
