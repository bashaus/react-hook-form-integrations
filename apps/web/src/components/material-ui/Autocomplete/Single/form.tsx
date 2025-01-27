import { z } from "zod";

import { Season } from "@/helpers/options";

export const autocompleteSingleFieldSchema = z.object({
  autocompleteSingleField: z.nativeEnum(Season),
});

export type AutocompleteSingleFieldSchema = z.infer<
  typeof autocompleteSingleFieldSchema
>;
