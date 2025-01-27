import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { enumErrorMap } from "@/resolvers/zod/error-map/enum";

import ToggleButtonField from ".";
import { toggleButtonFieldSchema } from "./form";

export default {
  component: ToggleButtonField,
  title: "Material UI/Toggle Button/Single",
} as Meta<typeof ToggleButtonField>;

export const Single = {
  decorators: [
    FormDecorator({
      defaultValues: { toggleButtonField: null },
      resolver: zodResolver(toggleButtonFieldSchema, {
        errorMap: enumErrorMap,
      }),
    }),
  ],
};
