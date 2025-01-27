/**
 * Required when the `defaultValues` has not been set.
 */
export function coerceUndefinedToArray(arg: unknown) {
  return arg ?? [];
}

/**
 * Required when the `defaultValues` has not been set.
 */
export function coerceUndefinedToFalse(arg: unknown) {
  if (arg === undefined) {
    arg = false;
  }

  return arg ?? false;
}
