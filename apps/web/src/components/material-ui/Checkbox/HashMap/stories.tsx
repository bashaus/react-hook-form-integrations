import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import FormDecorator from "@/decorators/FormDecorator";
import { Season } from "@/helpers/options";

import CheckboxHashMapField from ".";
import { checkboxHashMapFieldSchema } from "./schema";

export default {
  component: CheckboxHashMapField,
  title: "Material UI/Checkbox/Hash Map",
} satisfies Meta<typeof CheckboxHashMapField>;

export const HashMap = {
  decorators: [
    FormDecorator(
      {
        defaultValues: {
          checkboxHashMapField: Object.fromEntries(
            Object.values(Season).map((season) => [season, false]),
          ),
        },
        resolver: zodResolver(checkboxHashMapFieldSchema),
      },
      {
        githubPath: "material-ui/Checkbox/HashMap",
        buttons: {
          "MUI Checkbox Docs": "https://mui.com/material-ui/react-checkbox/",
        },
      },
    ),
  ],
};
