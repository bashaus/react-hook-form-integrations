import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiAutocompleteMultipleSchema } from "./schema";
import MuiAutocompleteMultipleView from "./view";

export default {
  component: MuiAutocompleteMultipleView,
  title: "Material UI/Autocomplete/Multiple",
} satisfies Meta<typeof MuiAutocompleteMultipleView>;

export const Multiple = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiAutocompleteMultipleSchema),
      },
      {
        githubPath: "material-ui/Autocomplete/Multiple",
        buttons: {
          "MUI Autocomplete Docs":
            "https://mui.com/material-ui/react-autocomplete/",
        },
      },
    ),
  ],
};
