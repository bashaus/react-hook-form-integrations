import { z } from "zod";

export const dropzoneFileUploadSchema = z.object({
  dropzoneFileUpload: z.array(z.custom<File>()).min(1),
});

export type DropzoneFileUploadSchema = z.infer<typeof dropzoneFileUploadSchema>;
