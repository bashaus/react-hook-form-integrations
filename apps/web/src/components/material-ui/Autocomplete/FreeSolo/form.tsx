import { z } from "zod";

import { coerceUndefinedToArray } from "@/resolvers/zod/coerce";

export const autocompleteFreeSoloFieldSchema = z.object({
  autocompleteFreeSoloField: z.preprocess(
    coerceUndefinedToArray,
    z.array(z.string()).min(1),
  ),
});

export type AutocompleteFreeSoloFieldSchema = z.infer<
  typeof autocompleteFreeSoloFieldSchema
>;
