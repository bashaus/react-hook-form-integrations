import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import AutocompleteFreeSoloField from ".";
import { autocompleteFreeSoloFieldSchema } from "./form";

export default {
  component: AutocompleteFreeSoloField,
  title: "Material UI/Autocomplete/Free Solo",
} satisfies Meta<typeof AutocompleteFreeSoloField>;

export const FreeSolo = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { autocompleteFreeSoloField: [] },
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
