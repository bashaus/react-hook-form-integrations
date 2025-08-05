import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import RatingNumberField from "./field";
import { ratingNumberFieldSchema } from "./schema";

export default {
  component: RatingNumberField,
  title: "Material UI/Rating/Number",
} satisfies Meta<typeof RatingNumberField>;

export const Number = {
  decorators: [
    FormDecorator(
      {
        resolver: zodResolver(ratingNumberFieldSchema),
      },
      {
        githubPath: "material-ui/Rating/Number",
        buttons: {
          "MUI Rating Docs": "https://mui.com/material-ui/react-rating/",
        },
      },
    ),
  ],
};
