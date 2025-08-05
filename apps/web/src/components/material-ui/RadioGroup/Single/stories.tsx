import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import RadioGroupField from ".";
import { radioGroupFieldSchema } from "./form";

export default {
  component: RadioGroupField,
  title: "Material UI/Radio Group/Single",
} satisfies Meta<typeof RadioGroupField>;

export const Single = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { radioGroupField: null },
        resolver: zodResolver(radioGroupFieldSchema),
      },
      {
        githubPath: "material-ui/RadioGroup/Single",
        buttons: {
          "MUI Radio Group Docs":
            "https://mui.com/material-ui/react-radio-button/",
        },
      },
    ),
  ],
};
