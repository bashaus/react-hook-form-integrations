import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import DropzoneFileUploadField from "./field";
import { dropzoneFileUploadFieldSchema } from "./schema";

export default {
  component: DropzoneFileUploadField,
  title: "React Dropzone/Dropzone/File Upload",
} satisfies Meta<typeof DropzoneFileUploadField>;

export const FileUpload = {
  decorators: [
    FormDecorator(
      {
        resolver: zodResolver(dropzoneFileUploadFieldSchema),
      },
      {
        githubPath: "react-dropzone/Dropzone/FileUpload",
        buttons: {
          "Dropzone Docs": "https://react-dropzone.js.org/",
        },
      },
    ),
  ],
};
