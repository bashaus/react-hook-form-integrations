import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import AutocompleteMultipleField from ".";
import { autocompleteMultipleFieldSchema } from "./form";

export default {
  component: AutocompleteMultipleField,
  title: "Material UI/Autocomplete/Multiple",
} satisfies Meta<typeof AutocompleteMultipleField>;

export const Multiple = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { autocompleteMultipleField: [] },
        resolver: zodResolver(autocompleteMultipleFieldSchema),
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
