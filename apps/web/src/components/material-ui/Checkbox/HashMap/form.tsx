import { z } from "zod";

import { Season } from "@/helpers/options";

export const checkboxHashMapFieldSchema = z.object({
  checkboxHashMapField: z.record(z.nativeEnum(Season), z.coerce.boolean()),
});

export type CheckboxHashMapFieldSchema = z.infer<
  typeof checkboxHashMapFieldSchema
>;
