import { ErrorMessage } from "@hookform/error-message";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { AutocompleteFreeSoloFieldSchema } from "./schema";

export default function AutocompleteFreeSoloField() {
  const { control } = useFormContext<AutocompleteFreeSoloFieldSchema>();

  return (
    <Controller
      name="autocompleteFreeSoloField"
      control={control}
      render={({ field: { onChange, value = [], ...field }, fieldState }) => (
        <Autocomplete
          {...field}
          options={seasons}
          freeSolo
          multiple
          value={value}
          onChange={(_e, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seasons"
              error={fieldState.invalid}
              helperText={<ErrorMessage name={field.name} />}
            />
          )}
        />
      )}
    />
  );
}
