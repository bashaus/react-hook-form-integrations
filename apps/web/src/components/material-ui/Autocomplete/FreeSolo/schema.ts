import { z } from "zod";

import { coerceUndefinedToArray } from "@/resolvers/zod/coerce";

export const muiAutocompleteFreeSoloSchema = z.object({
  muiAutocompleteFreeSolo: z.preprocess(
    coerceUndefinedToArray,
    z.array(z.string()).min(1),
  ),
});

export type MuiAutocompleteFreeSoloSchema = z.infer<
  typeof muiAutocompleteFreeSoloSchema
>;
