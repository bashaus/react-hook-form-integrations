import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import CompositeFieldArrayField from ".";
import { compositeFieldArrayFieldSchema } from "./schema";

export default {
  component: CompositeFieldArrayField,
  title: "Material UI/Composite/Field Array",
} satisfies Meta<typeof CompositeFieldArrayField>;

export const FieldArray = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { compositeFieldArrayField: [] },
        resolver: zodResolver(compositeFieldArrayFieldSchema),
      },
      {
        githubPath: "material-ui/Composite/FieldArray",
      },
    ),
  ],
};
