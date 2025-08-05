import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { ToggleButtonFieldSchema } from "./schema";

export default function ToggleButtonField() {
  const { control } = useFormContext<ToggleButtonFieldSchema>();

  return (
    <Controller
      name="toggleButtonField"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <FormLabel>Season</FormLabel>

          <ToggleButtonGroup {...field}>
            {seasons.map((season) => (
              <ToggleButton key={season} value={season}>
                {season}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
