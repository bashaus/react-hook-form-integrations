import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";

import SwitchBooleanField from ".";
import { switchBooleanFieldSchema } from "./form";

export default {
  component: SwitchBooleanField,
  title: "Material UI/Switch/Boolean",
} as Meta<typeof SwitchBooleanField>;

export const Boolean = {
  decorators: [
    FormDecorator({
      defaultValues: { switchBooleanField: false },
      resolver: zodResolver(switchBooleanFieldSchema),
    }),
  ],
};
