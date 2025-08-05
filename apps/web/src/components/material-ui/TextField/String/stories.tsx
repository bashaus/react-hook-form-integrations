import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import TextFieldStringField from ".";
import { textFieldStringFieldSchema } from "./schema";

export default {
  component: TextFieldStringField,
  title: "Material UI/Text Field/String",
} satisfies Meta<typeof TextFieldStringField>;

export const String = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { textFieldStringField: "" },
        resolver: zodResolver(textFieldStringFieldSchema),
      },
      {
        githubPath: "material-ui/TexField/String",
        buttons: {
          "MUI Text Field Docs":
            "https://mui.com/material-ui/react-text-field/",
        },
      },
    ),
  ],
};
