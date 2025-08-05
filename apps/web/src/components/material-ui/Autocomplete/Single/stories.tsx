import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import AutocompleteSingleField from "./field";
import { autocompleteSingleFieldSchema } from "./schema";

export default {
  component: AutocompleteSingleField,
  title: "Material UI/Autocomplete/Single",
} satisfies Meta<typeof AutocompleteSingleField>;

export const Single = {
  decorators: [
    FormDecorator(
      {
        resolver: zodResolver(autocompleteSingleFieldSchema),
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
