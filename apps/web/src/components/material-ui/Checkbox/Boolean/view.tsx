import { ErrorMessage } from "@hookform/error-message";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";

import { MuiCheckboxBooleanSchema } from "./schema";

export default function MuiCheckboxBoolean() {
  const { control } = useFormContext<MuiCheckboxBooleanSchema>();

  return (
    <Controller
      name="muiCheckboxBoolean"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
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
