import { ErrorMessage } from "@hookform/error-message";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { TextInputFieldSchema } from "./form";

export default function TextInputField() {
  const { control } = useFormContext<TextInputFieldSchema>();

  return (
    <Controller
      name="textInputField"
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          label="Text field"
          error={!!fieldState.error}
          helperText={<ErrorMessage name="textInputField" />}
        />
      )}
    />
  );
}
