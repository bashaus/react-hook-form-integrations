import { ErrorMessage } from "@hookform/error-message";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { MuiAutocompleteSingleSchema } from "./schema";

export default function MuiAutocompleteSingleView() {
  const { control } = useFormContext<MuiAutocompleteSingleSchema>();

  return (
    <Controller
      name="muiAutocompleteSingle"
      control={control}
      render={({ field: { onChange, value = "", ...field }, fieldState }) => (
        <Autocomplete
          {...field}
          options={seasons}
          value={value}
          onChange={(_e, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Season"
              error={fieldState.invalid}
              helperText={<ErrorMessage name={field.name} />}
            />
          )}
        />
      )}
    />
  );
}
