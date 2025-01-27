import { ErrorMessage } from "@hookform/error-message";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { AutocompleteMultipleFieldSchema } from "./form";

export default function AutocompleteMultipleField() {
  const { control } = useFormContext<AutocompleteMultipleFieldSchema>();

  return (
    <Controller
      name="autocompleteMultipleField"
      control={control}
      render={({ field: { onChange, ...field }, fieldState }) => (
        <Autocomplete
          {...field}
          options={seasons}
          multiple
          value={field.value ?? []}
          onChange={(_e, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seasons"
              error={!!fieldState.error}
              helperText={<ErrorMessage name={field.name} />}
            />
          )}
        />
      )}
    />
  );
}
