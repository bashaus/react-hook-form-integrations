import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiToggleButtonSchema } from "./schema";
import MuiToggleButtonView from "./view";

export default {
  component: MuiToggleButtonView,
  title: "Material UI/Toggle Button/Single",
} satisfies Meta<typeof MuiToggleButtonView>;

export const Single = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiToggleButtonSchema),
      },
      {
        githubPath: "material-ui/ToggleButton/Single",
        buttons: {
          "MUI Toggle Button Docs":
            "https://mui.com/material-ui/react-toggle-button/",
        },
      },
    ),
  ],
};
