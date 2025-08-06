import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";

import SliderNumberField from "./field";
import { sliderNumberFieldSchema } from "./schema";

export default {
  component: SliderNumberField,
  title: "Material UI/Slider/Number",
} satisfies Meta<typeof SliderNumberField>;

export const Number = {
  decorators: [
    HookFormDecorator(
      {
        defaultValues: { sliderNumberField: 0 },
        resolver: zodResolver(sliderNumberFieldSchema),
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
