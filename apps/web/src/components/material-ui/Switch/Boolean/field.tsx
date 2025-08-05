import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import { Controller, useFormContext } from "react-hook-form";

import { SwitchBooleanFieldSchema } from "./schema";

export default function SwitchBooleanField() {
  const { control } = useFormContext<SwitchBooleanFieldSchema>();

  return (
    <Controller
      name="switchBooleanField"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <FormControlLabel
            label="Subscribe to newsletter"
            control={<Switch {...field} />}
          />

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
