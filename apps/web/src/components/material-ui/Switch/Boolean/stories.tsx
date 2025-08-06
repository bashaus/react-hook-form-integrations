import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiSwitchBooleanSchema } from "./schema";
import MuiSwitchBooleanView from "./view";

export default {
  component: MuiSwitchBooleanView,
  title: "Material UI/Switch/Boolean",
} satisfies Meta<typeof MuiSwitchBooleanView>;

export const Boolean = {
  decorators: [
    HookFormDecorator(
      {
        defaultValues: { muiSwitchBoolean: false },
        resolver: zodResolver(muiSwitchBooleanSchema),
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
