import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta } from "@storybook/react-webpack5";

import HookFormDecorator from "@/decorators/HookFormDecorator";
import { Season } from "@/helpers/options";

import { muiCheckboxHashMapSchema } from "./schema";
import MuiCheckboxHashMapView from "./view";

export default {
  component: MuiCheckboxHashMapView,
  title: "Material UI/Checkbox/Hash Map",
} satisfies Meta<typeof MuiCheckboxHashMapView>;

export const HashMap = {
  decorators: [
    HookFormDecorator(
      {
        defaultValues: {
          muiCheckboxHashMap: Object.fromEntries(
            Object.values(Season).map((season) => [season, false]),
          ),
        },
        resolver: zodResolver(muiCheckboxHashMapSchema),
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
