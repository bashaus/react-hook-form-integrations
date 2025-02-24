import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react";

import FormDecorator from "@/decorators/FormDecorator";
import { numberErrorMap } from "@/resolvers/zod/error-map/number";

import SliderNumberField from ".";
import { sliderNumberFieldSchema } from "./form";

export default {
  component: SliderNumberField,
  title: "Material UI/Slider/Number",
} as Meta<typeof SliderNumberField>;

export const Number = {
  decorators: [
    FormDecorator(
      {
        defaultValues: { sliderNumberField: 0 },
        resolver: zodResolver(sliderNumberFieldSchema, {
          errorMap: numberErrorMap,
        }),
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
