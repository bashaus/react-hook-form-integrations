import { ErrorMessage } from "@hookform/error-message";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";

import { MuiCheckboxRequiredSchema } from "./schema";

export default function MuiCheckboxRequiredView() {
  const { control } = useFormContext<MuiCheckboxRequiredSchema>();

  return (
    <Controller
      name="muiCheckboxRequired"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <FormGroup>
            <FormControlLabel
              label="muiCheckboxRequired"
              control={<Checkbox {...field} />}
            />
          </FormGroup>

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
