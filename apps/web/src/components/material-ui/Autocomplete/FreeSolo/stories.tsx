import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { arrayErrorMap } from "@/resolvers/zod/error-map/array";

import AutocompleteFreeSoloField from ".";
import { autocompleteFreeSoloFieldSchema } from "./form";

export default {
  component: AutocompleteFreeSoloField,
  title: "Material UI/Autocomplete/Free Solo",
} as Meta<typeof AutocompleteFreeSoloField>;

export const FreeSolo = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { autocompleteFreeSoloField: [] },
        resolver: zodResolver(autocompleteFreeSoloFieldSchema, {
          errorMap: arrayErrorMap,
        }),
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
