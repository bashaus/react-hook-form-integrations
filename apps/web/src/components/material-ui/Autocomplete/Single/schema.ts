import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiAutocompleteSingleSchema = z.object({
  muiAutocompleteSingle: z.enum(Season),
});

export type MuiAutocompleteSingleSchema = z.infer<
  typeof muiAutocompleteSingleSchema
>;
