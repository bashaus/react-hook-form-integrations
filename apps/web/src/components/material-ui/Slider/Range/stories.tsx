import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import SliderRangeField from "./field";
import { sliderRangeFieldSchema } from "./schema";

export default {
  component: SliderRangeField,
  title: "Material UI/Slider/Range",
} satisfies Meta<typeof SliderRangeField>;

export const Range = {
  decorators: [
    HookFormDecorator(
      {
        defaultValues: { sliderRangeField: [0, 100] },
        resolver: zodResolver(sliderRangeFieldSchema),
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
