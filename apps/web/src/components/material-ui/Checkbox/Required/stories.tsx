import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { requiredErrorMap } from "@/resolvers/zod/error-map/required";

import CheckboxRequiredField from ".";
import { checkboxRequiredFieldSchema } from "./form";

export default {
  component: CheckboxRequiredField,
  title: "Material UI/Checkbox/Required",
} as Meta<typeof CheckboxRequiredField>;

export const Required = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { checkboxRequiredField: false },
        resolver: zodResolver(checkboxRequiredFieldSchema, {
          errorMap: requiredErrorMap,
        }),
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
