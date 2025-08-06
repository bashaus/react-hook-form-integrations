import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiRatingNumberSchema } from "./schema";
import MuiRatingNumberView from "./view";

export default {
  component: MuiRatingNumberView,
  title: "Material UI/Rating/Number",
} satisfies Meta<typeof MuiRatingNumberView>;

export const Number = {
  decorators: [
    HookFormDecorator(
      {
        resolver: zodResolver(muiRatingNumberSchema),
      },
      {
        githubPath: "material-ui/Rating/Number",
        buttons: {
          "MUI Rating Docs": "https://mui.com/material-ui/react-rating/",
        },
      },
    ),
  ],
};
