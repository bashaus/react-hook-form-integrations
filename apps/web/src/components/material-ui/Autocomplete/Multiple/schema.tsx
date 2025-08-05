import { z } from "zod";

import { Season } from "@/helpers/options";
import { coerceUndefinedToArray } from "@/resolvers/zod/coerce";

export const autocompleteMultipleFieldSchema = z.object({
  autocompleteMultipleField: z.preprocess(
    coerceUndefinedToArray,
    z.array(z.enum(Season)).min(1),
  ),
});

export type AutocompleteMultipleFieldSchema = z.infer<
  typeof autocompleteMultipleFieldSchema
>;
