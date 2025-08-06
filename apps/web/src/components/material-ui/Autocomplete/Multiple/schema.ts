import { z } from "zod";

import { Season } from "@/helpers/options";
import { coerceUndefinedToArray } from "@/resolvers/zod/coerce";

export const muiAutocompleteMultipleSchema = z.object({
  muiAutocompleteMultiple: z.preprocess(
    coerceUndefinedToArray,
    z.array(z.enum(Season)).min(1),
  ),
});

export type MuiAutocompleteMultipleSchema = z.infer<
  typeof muiAutocompleteMultipleSchema
>;
