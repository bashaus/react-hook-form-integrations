import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import TextFieldStringField from "./field";
import { textFieldStringFieldSchema } from "./schema";

export default {
  component: TextFieldStringField,
  title: "Material UI/Text Field/String",
} satisfies Meta<typeof TextFieldStringField>;

export const String = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(textFieldStringFieldSchema),
      },
      {
        githubPath: "material-ui/TextField/String",
        buttons: {
          "MUI Text Field Docs":
            "https://mui.com/material-ui/react-text-field/",
        },
      },
    ),
  ],
};
