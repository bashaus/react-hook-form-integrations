import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import ToggleButtonField from "./field";
import { toggleButtonFieldSchema } from "./schema";

export default {
  component: ToggleButtonField,
  title: "Material UI/Toggle Button/Single",
} satisfies Meta<typeof ToggleButtonField>;

export const Single = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(toggleButtonFieldSchema),
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
