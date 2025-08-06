import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const switchBooleanFieldSchema = z.object({
  switchBooleanField: z.coerce.boolean(),
});

export type SwitchBooleanFieldSchema = z.infer<typeof switchBooleanFieldSchema>;
export const switchBooleanFieldSchemaResolver = zodResolver(
  switchBooleanFieldSchema,
);
