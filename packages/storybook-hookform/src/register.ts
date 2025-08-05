import { Addon_TypesEnum } from "storybook/internal/types";
import { addons } from "storybook/manager-api";

import { ADDON_ID, PANEL_ERRORS_ID, PANEL_VALUES_ID } from "./constants";
import ErrorsPanel from "./panels/ErrorsPanel";
import ValuesPanel from "./panels/ValuesPanel";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_VALUES_ID, {
    type: Addon_TypesEnum.PANEL,
    title: "Form values",
    render: ValuesPanel,
  });

  addons.add(PANEL_ERRORS_ID, {
    type: Addon_TypesEnum.PANEL,
    title: "Form errors",
    render: ErrorsPanel,
  });
});
