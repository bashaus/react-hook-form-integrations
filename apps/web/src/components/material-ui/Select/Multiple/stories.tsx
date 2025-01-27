import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { arrayErrorMap } from "@/resolvers/zod/error-map/array";

import SelectMultipleField from ".";
import { selectMultipleFieldSchema } from "./form";

export default {
  component: SelectMultipleField,
  title: "Material UI/Select/Multiple",
} as Meta<typeof SelectMultipleField>;

export const Multiple = {
  decorators: [
    FormDecorator({
      defaultValues: { selectMultipleField: [] },
      resolver: zodResolver(selectMultipleFieldSchema, {
        errorMap: arrayErrorMap,
      }),
    }),
  ],
};
