import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import SelectMultipleField from "./field";
import { selectMultipleFieldSchema } from "./schema";

export default {
  component: SelectMultipleField,
  title: "Material UI/Select/Multiple",
} satisfies Meta<typeof SelectMultipleField>;

export const Multiple = {
  decorators: [
    FormDecorator(
      {
        resolver: zodResolver(selectMultipleFieldSchema),
      },
      {
        githubPath: "material-ui/Select/Multiple",
        buttons: {
          "MUI Select Docs": "https://mui.com/material-ui/react-select/",
        },
      },
    ),
  ],
};
