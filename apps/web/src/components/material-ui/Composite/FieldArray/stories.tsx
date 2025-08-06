import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiCompositeFieldArraySchema } from "./schema";
import MuiCompositeFieldArrayView from "./view";

export default {
  component: MuiCompositeFieldArrayView,
  title: "Material UI/Composite/Field Array",
} satisfies Meta<typeof MuiCompositeFieldArrayView>;

export const Array = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiCompositeFieldArraySchema),
      },
      {
        githubPath: "material-ui/Composite/Array",
      },
    ),
  ],
};
