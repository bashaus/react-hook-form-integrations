import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { enumErrorMap } from "@/resolvers/zod/error-map/enum";

import RadioGroupField from ".";
import { radioGroupFieldSchema } from "./form";

export default {
  component: RadioGroupField,
  title: "Material UI/Radio Group/Single",
} as Meta<typeof RadioGroupField>;

export const Single = {
  decorators: [
    FormDecorator({
      defaultValues: { radioGroupField: null },
      resolver: zodResolver(radioGroupFieldSchema, {
        errorMap: enumErrorMap,
      }),
    }),
  ],
};
