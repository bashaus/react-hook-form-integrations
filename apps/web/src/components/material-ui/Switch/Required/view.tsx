import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import { Controller, useFormContext } from "react-hook-form";

import { MuiSwitchRequiredSchema } from "./schema";

export default function MuiSwitchRequiredView() {
  const { control } = useFormContext<MuiSwitchRequiredSchema>();

  return (
    <Controller
      name="muiSwitchRequired"
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
