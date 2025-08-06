import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiSliderRangeSchema } from "./schema";
import MuiSliderRangeView from "./view";

export default {
  component: MuiSliderRangeView,
  title: "Material UI/Slider/Range",
} satisfies Meta<typeof MuiSliderRangeView>;

export const Range = {
  decorators: [
    HookFormDecorator(
      {
        defaultValues: { muiSliderRange: [0, 100] },
        resolver: zodResolver(muiSliderRangeSchema),
      },
      {
        githubPath: "material-ui/Slider/Range",
        buttons: {
          "MUI Slider Docs": "https://mui.com/material-ui/react-slider/",
        },
      },
    ),
  ],
};
