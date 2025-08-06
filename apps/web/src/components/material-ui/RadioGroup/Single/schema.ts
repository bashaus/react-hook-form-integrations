import { z } from "zod";

import { Season } from "@/helpers/options";

export const muiRadioGroupSchema = z.object({
  muiRadioGroup: z.enum(Season),
});

export type MuiRadioGroupSchema = z.infer<typeof muiRadioGroupSchema>;
