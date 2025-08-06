import { FieldValues, FormState } from "react-hook-form";
import { addons } from "storybook/preview-api";

import {
  EVENT_FORM_STATE_UPDATE,
  EVENT_FORM_VALUES_UPDATE,
} from "../../constants";

export function emitFormUpdate<TFieldValues extends FieldValues>(
  formValues: FieldValues,
  formState: FormState<TFieldValues>,
) {
  addons.getChannel().emit(EVENT_FORM_VALUES_UPDATE, formValues);
  addons.getChannel().emit(EVENT_FORM_STATE_UPDATE, formState);
}
