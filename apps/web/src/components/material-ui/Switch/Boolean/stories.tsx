import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import SwitchBooleanField from "./field";
import { switchBooleanFieldSchema } from "./schema";

export default {
  component: SwitchBooleanField,
  title: "Material UI/Switch/Boolean",
} satisfies Meta<typeof SwitchBooleanField>;

export const Boolean = {
  decorators: [
    HookFormDecorator(
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
