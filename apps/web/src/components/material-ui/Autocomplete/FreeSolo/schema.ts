import { z } from "zod";

export const muiAutocompleteFreeSoloSchema = z.object({
  muiAutocompleteFreeSolo: z.array(z.string()).min(1).prefault([]),
});

export type MuiAutocompleteFreeSoloSchema = z.infer<
  typeof muiAutocompleteFreeSoloSchema
>;
