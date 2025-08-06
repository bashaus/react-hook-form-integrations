import { useEffect } from "react";
import { useFormContext, useFormState } from "react-hook-form";

import { cloneFormState } from "../../helpers/clone-form-state";
import { emitFormUpdate } from "../../preview";

export default function FormEmitter() {
  const form = useFormContext();
  const formState = useFormState();
  const formValues = form.watch();

  useEffect(() => {
    emitFormUpdate(formValues, cloneFormState(formState));
  }, [formValues, formState]);

  return null;
}
