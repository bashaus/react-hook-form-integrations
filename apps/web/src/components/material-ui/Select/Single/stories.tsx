import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiSelectSingleSchema } from "./schema";
import MuiSelectSingleView from "./view";

export default {
  component: MuiSelectSingleView,
  title: "Material UI/Select/Single",
} satisfies Meta<typeof MuiSelectSingleView>;

export const Single = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiSelectSingleSchema),
      },
      {
        githubPath: "material-ui/Select/Single",
        buttons: {
          "MUI Select Docs": "https://mui.com/material-ui/react-select/",
        },
      },
    ),
  ],
};
