import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import { Controller, useFormContext } from "react-hook-form";

import { MuiRatingNumberSchema } from "./schema";

export default function MuiRatingNumberView() {
  const { control } = useFormContext<MuiRatingNumberSchema>();

  return (
    <Controller
      name="muiRatingNumber"
      control={control}
      render={({ field: { value = 0, ...field }, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <FormLabel>Rating</FormLabel>
          <Rating {...field} value={value} />
          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
