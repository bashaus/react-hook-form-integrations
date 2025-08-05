import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import SwitchBooleanField from ".";
import { switchBooleanFieldSchema } from "./schema";

export default {
  component: SwitchBooleanField,
  title: "Material UI/Switch/Boolean",
} satisfies Meta<typeof SwitchBooleanField>;

export const Boolean = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { switchBooleanField: false },
        resolver: zodResolver(switchBooleanFieldSchema),
      },
      {
        githubPath: "material-ui/Switch/Boolean",
        buttons: {
          "MUI Switch Docs": "https://mui.com/material-ui/react-switch/",
        },
      },
    ),
  ],
};
