import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import SelectSingleField from ".";
import { selectSingleFieldSchema } from "./schema";

export default {
  component: SelectSingleField,
  title: "Material UI/Select/Single",
} satisfies Meta<typeof SelectSingleField>;

export const Single = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { selectSingleField: "" },
        resolver: zodResolver(selectSingleFieldSchema),
      },
      {
        githubPath: "material-ui/Select/Single",
        buttons: {
          "MUI Select Docs": "https://mui.com/material-ui/react-select/",
        },
      },
    ),
  ],
};
