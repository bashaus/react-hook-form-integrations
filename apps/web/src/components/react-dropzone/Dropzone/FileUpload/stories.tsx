import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { arrayErrorMap } from "@/resolvers/zod/error-map/array";

import DropzoneFileUploadField from ".";
import { dropzoneFileUploadFieldSchema } from "./form";

export default {
  component: DropzoneFileUploadField,
  title: "React Dropzone/Dropzone/File Upload",
} as Meta<typeof DropzoneFileUploadField>;

export const FileUpload = {
  decorators: [
    FormDecorator({
      defaultValues: { dropzoneFileUploadField: [] },
      resolver: zodResolver(dropzoneFileUploadFieldSchema, {
        errorMap: arrayErrorMap,
      }),
    }),
  ],
};
