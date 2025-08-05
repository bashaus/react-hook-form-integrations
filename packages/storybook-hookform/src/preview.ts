import { addons } from "storybook/preview-api";

import { EVENT_SUBMIT_ERRORS, EVENT_SUBMIT_VALUES } from "./constants";

export const emitFormUpdate = (values: unknown, errors: unknown) => {
  addons.getChannel().emit(EVENT_SUBMIT_VALUES, values);
  addons.getChannel().emit(EVENT_SUBMIT_ERRORS, errors);
};
