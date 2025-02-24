import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { arrayErrorMap } from "@/resolvers/zod/error-map/array";

import CompositeFieldArrayField from ".";
import { compositeFieldArrayFieldSchema } from "./form";

export default {
  component: CompositeFieldArrayField,
  title: "Material UI/Composite/Field Array",
} as Meta<typeof CompositeFieldArrayField>;

export const FieldArray = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { compositeFieldArrayField: [] },
        resolver: zodResolver(compositeFieldArrayFieldSchema, {
          errorMap: arrayErrorMap,
        }),
      },
      {
        githubPath: "material-ui/Composite/FieldArray",
      },
    ),
  ],
};
