import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";

import SliderRangeField from "./field";
import { sliderRangeFieldSchema } from "./schema";

export default {
  component: SliderRangeField,
  title: "Material UI/Slider/Range",
} satisfies Meta<typeof SliderRangeField>;

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
