import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { numberErrorMap } from "@/resolvers/zod/error-map/number";

import RatingNumberFieldField from ".";
import { ratingNumberFieldSchema } from "./form";

export default {
  component: RatingNumberFieldField,
  title: "Material UI/Rating/Number",
} as Meta<typeof RatingNumberFieldField>;

export const Number = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { ratingNumberField: null },
        resolver: zodResolver(ratingNumberFieldSchema, {
          errorMap: numberErrorMap,
        }),
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
