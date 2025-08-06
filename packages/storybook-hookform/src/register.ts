import { Addon_TypesEnum } from "storybook/internal/types";
import { addons } from "storybook/manager-api";

import FormErrorsPanel from "./components/FormErrorsPanel";
import FormErrorsTitle from "./components/FormErrorsTitle";
import FormStatePanel from "./components/FormStatePanel";
import FormStateTitle from "./components/FormStateTitle";
import FormValuesPanel from "./components/FormValuesPanel";
import FormValuesTitle from "./components/FormValuesTitle";
import {
  ADDON_ID,
  PANEL_FORM_ERRORS_ID,
  PANEL_FORM_STATE_ID,
  PANEL_FORM_VALUES_ID,
} from "./constants";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_FORM_VALUES_ID, {
    type: Addon_TypesEnum.PANEL,
    title: FormValuesTitle,
    render: FormValuesPanel,
  });

  addons.add(PANEL_FORM_ERRORS_ID, {
    type: Addon_TypesEnum.PANEL,
    title: FormErrorsTitle,
    render: FormErrorsPanel,
  });

  addons.add(PANEL_FORM_STATE_ID, {
    type: Addon_TypesEnum.PANEL,
    title: FormStateTitle,
    render: FormStatePanel,
  });
});
