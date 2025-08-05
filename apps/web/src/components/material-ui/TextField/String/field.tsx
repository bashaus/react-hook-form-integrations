import { ErrorMessage } from "@hookform/error-message";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { TextFieldStringFieldSchema } from "./schema";

export default function TextFieldStringField() {
  const { control } = useFormContext<TextFieldStringFieldSchema>();

  return (
    <Controller
      name="textFieldStringField"
      control={control}
      render={({ field: { value = "", ...field }, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          label="Text field"
          value={value}
          error={fieldState.invalid}
          helperText={<ErrorMessage name={field.name} />}
        />
      )}
    />
  );
}
