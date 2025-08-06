import { ErrorMessage } from "@hookform/error-message";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { MuiTextFieldStringSchema } from "./schema";

export default function MuiTextFieldStringView() {
  const { control } = useFormContext<MuiTextFieldStringSchema>();

  return (
    <Controller
      name="muiTextFieldString"
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
