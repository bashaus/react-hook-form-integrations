import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { enumErrorMap } from "@/resolvers/zod/error-map/enum";

import AutocompleteSingleField from ".";
import { autocompleteSingleFieldSchema } from "./form";

export default {
  component: AutocompleteSingleField,
  title: "Material UI/Autocomplete/Single",
} as Meta<typeof AutocompleteSingleField>;

export const Single = {
  decorators: [
    FormDecorator({
      defaultValues: { autocompleteSingleField: null },
      resolver: zodResolver(autocompleteSingleFieldSchema, {
        errorMap: enumErrorMap,
      }),
    }),
  ],
};
