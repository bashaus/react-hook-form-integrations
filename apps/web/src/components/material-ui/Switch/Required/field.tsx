import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import { Controller, useFormContext } from "react-hook-form";

import { SwitchRequiredFieldSchema } from "./schema";

export default function SwitchRequiredField() {
  const { control } = useFormContext<SwitchRequiredFieldSchema>();

  return (
    <Controller
      name="switchRequiredField"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <FormControlLabel
            label="Agree to terms and conditions"
            control={<Switch {...field} />}
          />

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
