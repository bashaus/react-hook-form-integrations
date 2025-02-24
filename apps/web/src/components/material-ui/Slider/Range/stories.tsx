import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";

import SliderRangeField from ".";
import { sliderRangeFieldSchema } from "./form";

export default {
  component: SliderRangeField,
  title: "Material UI/Slider/Range",
} as Meta<typeof SliderRangeField>;

export const Range = {
  decorators: [
    FormDecorator(
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
