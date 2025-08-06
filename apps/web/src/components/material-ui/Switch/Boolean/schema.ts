import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const muiSwitchBooleanSchema = z.object({
  muiSwitchBoolean: z.coerce.boolean(),
});

export type MuiSwitchBooleanSchema = z.infer<typeof muiSwitchBooleanSchema>;
export const muiSwitchBooleanSchemaResolver = zodResolver(
  muiSwitchBooleanSchema,
);
