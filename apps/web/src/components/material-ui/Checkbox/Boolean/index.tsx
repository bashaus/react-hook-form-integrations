import { ErrorMessage } from "@hookform/error-message";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";

import { CheckboxBooleanFieldSchema } from "./form";

export default function CheckboxBooleanField() {
  const { control } = useFormContext<CheckboxBooleanFieldSchema>();

  return (
    <Controller
      name="checkboxBooleanField"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth>
          <FormGroup>
            <FormControlLabel
              label="Subscribe to newsletter"
              control={<Checkbox {...field} />}
            />
          </FormGroup>

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
