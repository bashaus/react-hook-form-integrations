import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import CheckboxBooleanField from ".";
import { checkboxBooleanFieldSchema } from "./schema";

export default {
  component: CheckboxBooleanField,
  title: "Material UI/Checkbox/Boolean",
} satisfies Meta<typeof CheckboxBooleanField>;

export const Boolean = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { checkboxBooleanField: false },
        resolver: zodResolver(checkboxBooleanFieldSchema),
      },
      {
        githubPath: "material-ui/Checkbox/Boolean",
        buttons: {
          "MUI Checkbox Docs": "https://mui.com/material-ui/react-checkbox/",
        },
      },
    ),
  ],
};
