import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiAutocompleteSingleSchema } from "./schema";
import MuiAutocompleteSingleView from "./view";

export default {
  component: MuiAutocompleteSingleView,
  title: "Material UI/Autocomplete/Single",
} satisfies Meta<typeof MuiAutocompleteSingleView>;

export const Single = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiAutocompleteSingleSchema),
      },
      {
        githubPath: "material-ui/Autocomplete/Single",
        buttons: {
          "MUI Autocomplete Docs":
            "https://mui.com/material-ui/react-autocomplete/",
        },
      },
    ),
  ],
};
