import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { stringErrorMap } from "@/resolvers/zod/error-map/string";

import TextFieldStringField from ".";
import { textFieldStringFieldSchema } from "./form";

export default {
  component: TextFieldStringField,
  title: "Material UI/TextField/String",
} as Meta<typeof TextFieldStringField>;

export const String = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { textFieldStringField: "" },
        resolver: zodResolver(textFieldStringFieldSchema, {
          errorMap: stringErrorMap,
        }),
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
