import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { dropzoneFileUploadSchema } from "./schema";
import DropzoneFileUploadView from "./view";

export default {
  component: DropzoneFileUploadView,
  title: "React Dropzone/Dropzone/File Upload",
} satisfies Meta<typeof DropzoneFileUploadView>;

export const FileUpload = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(dropzoneFileUploadSchema),
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
