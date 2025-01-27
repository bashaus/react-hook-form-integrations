import { ErrorMessage } from "@hookform/error-message";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { CheckboxHashMapFieldSchema } from "./form";

export default function CheckboxHashMapField() {
  const { control } = useFormContext<CheckboxHashMapFieldSchema>();

  return (
    <Controller
      name="checkboxHashMapField"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth>
          <FormGroup>
            {seasons.map((season) => (
              <Controller
                name={`checkboxHashMapField.${season}`}
                control={control}
                key={season}
                render={({ field }) => (
                  <FormControl error={!!fieldState.error} fullWidth>
                    <FormControlLabel
                      key={season}
                      label={season}
                      control={<Checkbox {...field} />}
                    />

                    <ErrorMessage name={field.name} as={FormHelperText} />
                  </FormControl>
                )}
              />
            ))}
          </FormGroup>

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
