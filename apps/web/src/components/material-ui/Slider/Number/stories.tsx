import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import { muiSliderNumberSchema } from "./schema";
import MuiSliderNumberView from "./view";

export default {
  component: MuiSliderNumberView,
  title: "Material UI/Slider/Number",
} satisfies Meta<typeof MuiSliderNumberView>;

export const Number = {
  decorators: [
    HookFormDecorator(
      {
        defaultValues: { muiSliderNumber: 0 },
        resolver: zodResolver(muiSliderNumberSchema),
      },
      {
        githubPath: "material-ui/Slider/Number",
        buttons: {
          "MUI Slider Docs": "https://mui.com/material-ui/react-slider/",
        },
      },
    ),
  ],
};
