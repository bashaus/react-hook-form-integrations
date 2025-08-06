import { FieldValues, FormState } from "react-hook-form";

export function cloneFormState<Schema extends FieldValues>(
  formState: FormState<Schema>,
) {
  return {
    dirtyFields: { ...formState.dirtyFields },
    disabled: formState.disabled,
    errors: { ...formState.errors },
    isDirty: formState.isDirty,
    isLoading: formState.isLoading,
    isReady: formState.isReady,
    isSubmitSuccessful: formState.isSubmitSuccessful,
    isSubmitted: formState.isSubmitted,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    isValidating: formState.isValidating,
    submitCount: formState.submitCount,
    touchedFields: { ...formState.touchedFields },
    validatingFields: { ...formState.validatingFields },
    defaultValues: { ...formState.defaultValues },
  };
}
