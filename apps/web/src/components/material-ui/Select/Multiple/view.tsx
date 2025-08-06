import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { MuiSelectMultipleSchema } from "./schema";

export default function MuiSelectMultipleView() {
  const { control } = useFormContext<MuiSelectMultipleSchema>();

  return (
    <Controller
      name="muiSelectMultiple"
      control={control}
      render={({ field: { value = [], ...field }, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <InputLabel>Seasons</InputLabel>
          <Select {...field} value={value} multiple label="Seasons">
            {seasons.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
          </Select>

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
