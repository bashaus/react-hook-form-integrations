import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiSwitchRequiredSchema } from "./schema";
import MuiSwitchRequiredView from "./view";

export default {
  component: MuiSwitchRequiredView,
  title: "Material UI/Switch/Required",
} satisfies Meta<typeof MuiSwitchRequiredView>;

export const Required = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiSwitchRequiredSchema),
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
