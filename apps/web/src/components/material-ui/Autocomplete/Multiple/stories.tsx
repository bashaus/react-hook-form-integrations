import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { arrayErrorMap } from "@/resolvers/zod/error-map/array";

import AutocompleteMultipleField from ".";
import { autocompleteMultipleFieldSchema } from "./form";

export default {
  component: AutocompleteMultipleField,
  title: "Material UI/Autocomplete/Multiple",
} as Meta<typeof AutocompleteMultipleField>;

export const Multiple = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { autocompleteMultipleField: [] },
        resolver: zodResolver(autocompleteMultipleFieldSchema, {
          errorMap: arrayErrorMap,
        }),
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
