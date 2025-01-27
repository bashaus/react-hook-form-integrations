import { z } from "zod";

export const dropzoneFileUploadFieldSchema = z.object({
  dropzoneFileUploadField: z.array(z.custom<File>()).min(1),
});

export type DropzoneFileUploadFieldFieldSchema = z.infer<
  typeof dropzoneFileUploadFieldSchema
>;
