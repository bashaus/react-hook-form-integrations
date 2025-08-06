import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiCheckboxBooleanSchema } from "./schema";
import MuiCheckboxBoolean from "./view";

export default {
  component: MuiCheckboxBoolean,
  title: "Material UI/Checkbox/Boolean",
} satisfies Meta<typeof MuiCheckboxBoolean>;

export const Boolean = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiCheckboxBooleanSchema),
      },
      {
        githubPath: "material-ui/Checkbox/Boolean",
        buttons: {
          "MUI Checkbox Docs": "https://mui.com/material-ui/react-checkbox/",
        },
      },
    ),
  ],
};
