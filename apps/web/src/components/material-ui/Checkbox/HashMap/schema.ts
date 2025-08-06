import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiCheckboxHashMapSchema = z.object({
  muiCheckboxHashMap: z.record(z.enum(Season), z.coerce.boolean()),
});

export type MuiCheckboxHashMapSchema = z.infer<typeof muiCheckboxHashMapSchema>;
