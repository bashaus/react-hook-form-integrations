import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { requiredErrorMap } from "@/resolvers/zod/error-map/required";

import SwitchRequiredField from ".";
import { switchRequiredFieldSchema } from "./form";

export default {
  component: SwitchRequiredField,
  title: "Material UI/Switch/Required",
} as Meta<typeof SwitchRequiredField>;

export const Required = {
  decorators: [
    FormDecorator({
      defaultValues: { switchRequiredField: false },
      resolver: zodResolver(switchRequiredFieldSchema, {
        errorMap: requiredErrorMap,
      }),
    }),
  ],
};
