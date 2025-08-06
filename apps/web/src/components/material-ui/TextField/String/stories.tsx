import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiTextFieldStringSchema } from "./schema";
import MuiTextFieldStringView from "./view";

export default {
  component: MuiTextFieldStringView,
  title: "Material UI/Text Field/String",
} satisfies Meta<typeof MuiTextFieldStringView>;

export const String = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiTextFieldStringSchema),
      },
      {
        githubPath: "material-ui/TextField/String",
        buttons: {
          "MUI Text Field Docs":
            "https://mui.com/material-ui/react-text-field/",
        },
      },
    ),
  ],
};
