import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import AutocompleteFreeSoloField from "./field";
import { autocompleteFreeSoloFieldSchema } from "./schema";

export default {
  component: AutocompleteFreeSoloField,
  title: "Material UI/Autocomplete/Free Solo",
} satisfies Meta<typeof AutocompleteFreeSoloField>;

export const FreeSolo = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(autocompleteFreeSoloFieldSchema),
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
