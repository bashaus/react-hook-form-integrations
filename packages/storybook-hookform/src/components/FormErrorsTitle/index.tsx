import { useState } from "react";
import { FieldValues, FormState } from "react-hook-form";
import { useTheme } from "storybook/internal/theming";
import { useChannel } from "storybook/manager-api";

import { EVENT_FORM_STATE_UPDATE } from "../../constants";

export type FormErrorsAddonState = {
  isValid?: boolean;
};

export default function FormErrorsTitle() {
  const theme = useTheme();
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  useChannel({
    [EVENT_FORM_STATE_UPDATE]: (formState: FormState<FieldValues>) => {
      const { isValid, submitCount } = formState;
      setIsValid(submitCount > 0 ? isValid : undefined);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        color:
          isValid === true
            ? theme.color.positive
            : isValid === false
              ? theme.color.negative
              : undefined,
      }}
    >
      <span>Form errors</span>
    </div>
  );
}
