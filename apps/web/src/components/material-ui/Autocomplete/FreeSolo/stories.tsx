import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiAutocompleteFreeSoloSchema } from "./schema";
import MuiAutocompleteFreeSoloView from "./view";

export default {
  component: MuiAutocompleteFreeSoloView,
  title: "Material UI/Autocomplete/Free Solo",
} satisfies Meta<typeof MuiAutocompleteFreeSoloView>;

export const FreeSolo = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiAutocompleteFreeSoloSchema),
      },
      {
        githubPath: "material-ui/Autocomplete/FreeSolo",
        buttons: {
          "MUI Autocomplete Docs":
            "https://mui.com/material-ui/react-autocomplete/",
        },
      },
    ),
  ],
};
