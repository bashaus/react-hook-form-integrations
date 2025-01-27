import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";

import CheckboxBooleanField from ".";
import { checkboxBooleanFieldSchema } from "./form";

export default {
  component: CheckboxBooleanField,
  title: "Material UI/Checkbox/Boolean",
} as Meta<typeof CheckboxBooleanField>;

export const Boolean = {
  decorators: [
    FormDecorator({
      defaultValues: { checkboxBooleanField: false },
      resolver: zodResolver(checkboxBooleanFieldSchema),
    }),
  ],
};
