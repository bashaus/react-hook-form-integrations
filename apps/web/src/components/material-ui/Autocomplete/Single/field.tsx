import { ErrorMessage } from "@hookform/error-message";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { AutocompleteSingleFieldSchema } from "./schema";

export default function AutocompleteSingleField() {
  const { control } = useFormContext<AutocompleteSingleFieldSchema>();

  return (
    <Controller
      name="autocompleteSingleField"
      control={control}
      render={({ field: { onChange, ...field }, fieldState }) => (
        <Autocomplete
          {...field}
          options={seasons}
          value={field.value ?? ""}
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
