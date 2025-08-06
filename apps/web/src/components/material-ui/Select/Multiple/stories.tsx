import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiSelectMultipleSchema } from "./schema";
import MuiSelectMultipleView from "./view";

export default {
  component: MuiSelectMultipleView,
  title: "Material UI/Select/Multiple",
} satisfies Meta<typeof MuiSelectMultipleView>;

export const Multiple = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiSelectMultipleSchema),
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
