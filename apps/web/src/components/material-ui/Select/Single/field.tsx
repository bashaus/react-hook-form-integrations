import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { SelectSingleFieldSchema } from "./schema";

export default function SelectSingleField() {
  const { control } = useFormContext<SelectSingleFieldSchema>();

  return (
    <Controller
      name="selectSingleField"
      control={control}
      render={({ field: { value = "", ...field }, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <InputLabel>Season</InputLabel>
          <Select {...field} value={value} label="Season">
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
