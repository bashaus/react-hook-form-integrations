import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { stringErrorMap } from "@/resolvers/zod/error-map/string";

import TextField from ".";
import { textInputFieldSchema } from "./form";

export default {
  component: TextField,
  title: "Material UI/Text/String",
} as Meta<typeof TextField>;

export const String = {
  decorators: [
    FormDecorator({
      defaultValues: { textInputField: "" },
      resolver: zodResolver(textInputFieldSchema, {
        errorMap: stringErrorMap,
      }),
    }),
  ],
};
