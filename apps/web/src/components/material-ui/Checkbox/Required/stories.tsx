import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiCheckboxRequiredSchema } from "./schema";
import MuiCheckboxRequiredView from "./view";

export default {
  component: MuiCheckboxRequiredView,
  title: "Material UI/Checkbox/Required",
} satisfies Meta<typeof MuiCheckboxRequiredView>;

export const Required = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiCheckboxRequiredSchema),
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
