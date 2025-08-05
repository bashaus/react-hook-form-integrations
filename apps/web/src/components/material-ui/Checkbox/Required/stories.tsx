import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import CheckboxRequiredField from "./field";
import { checkboxRequiredFieldSchema } from "./schema";

export default {
  component: CheckboxRequiredField,
  title: "Material UI/Checkbox/Required",
} satisfies Meta<typeof CheckboxRequiredField>;

export const Required = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { checkboxRequiredField: false },
        resolver: zodResolver(checkboxRequiredFieldSchema),
      },
      {
        githubPath: "material-ui/Checkbox/Required",
        buttons: {
          "MUI Checkbox Docs": "https://mui.com/material-ui/react-checkbox/",
        },
      },
    ),
  ],
};
