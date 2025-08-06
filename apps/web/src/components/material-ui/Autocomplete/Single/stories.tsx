import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import AutocompleteSingleField from "./field";
import { autocompleteSingleFieldSchema } from "./schema";

export default {
  component: AutocompleteSingleField,
  title: "Material UI/Autocomplete/Single",
} satisfies Meta<typeof AutocompleteSingleField>;

export const Single = {
  decorators: [
    HookFormDecorator(
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
