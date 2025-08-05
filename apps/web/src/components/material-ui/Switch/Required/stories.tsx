import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import SwitchRequiredField from "./field";
import { switchRequiredFieldSchema } from "./schema";

export default {
  component: SwitchRequiredField,
  title: "Material UI/Switch/Required",
} satisfies Meta<typeof SwitchRequiredField>;

export const Required = {
  decorators: [
    FormDecorator(
      {
        resolver: zodResolver(switchRequiredFieldSchema),
      },
      {
        githubPath: "material-ui/Switch/Required",
        buttons: {
          "MUI Switch Docs": "https://mui.com/material-ui/react-switch/",
        },
      },
    ),
  ],
};
