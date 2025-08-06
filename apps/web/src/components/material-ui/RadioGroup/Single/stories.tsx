import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiRadioGroupSchema } from "./schema";
import MuiRadioGroupView from "./view";

export default {
  component: MuiRadioGroupView,
  title: "Material UI/Radio Group/Single",
} satisfies Meta<typeof MuiRadioGroupView>;

export const Single = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiRadioGroupSchema),
      },
      {
        githubPath: "material-ui/RadioGroup/Single",
        buttons: {
          "MUI Radio Group Docs":
            "https://mui.com/material-ui/react-radio-button/",
        },
      },
    ),
  ],
};
