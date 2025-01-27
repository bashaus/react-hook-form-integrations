import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { enumErrorMap } from "@/resolvers/zod/error-map/enum";

import SelectSingleField from ".";
import { selectSingleFieldSchema } from "./form";

export default {
  component: SelectSingleField,
  title: "Material UI/Select/Single",
} as Meta<typeof SelectSingleField>;

export const Single = {
  decorators: [
    FormDecorator({
      defaultValues: { selectSingleField: "" },
      resolver: zodResolver(selectSingleFieldSchema, {
        errorMap: enumErrorMap,
      }),
    }),
  ],
};
