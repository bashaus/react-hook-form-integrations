import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { numberErrorMap } from "@/resolvers/zod/error-map/number";

import RatingFieldField from ".";
import { ratingFieldSchema } from "./form";

export default {
  component: RatingFieldField,
  title: "Material UI/Rating/Number",
} as Meta<typeof RatingFieldField>;

export const Number = {
  decorators: [
    FormDecorator({
      defaultValues: { ratingField: null },
      resolver: zodResolver(ratingFieldSchema, {
        errorMap: numberErrorMap,
      }),
    }),
  ],
};
