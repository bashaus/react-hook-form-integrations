import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import { Controller, useFormContext } from "react-hook-form";

import { RatingNumberFieldSchema } from "./schema";

export default function RatingNumberField() {
  const { control } = useFormContext<RatingNumberFieldSchema>();

  return (
    <Controller
      name="ratingNumberField"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth>
          <FormLabel>Rating</FormLabel>
          <Rating {...field} />
          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
