import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import { Controller, useFormContext } from "react-hook-form";

import { RatingFieldSchema } from "./form";

export default function RatingField() {
  const { control } = useFormContext<RatingFieldSchema>();

  return (
    <Controller
      name="ratingField"
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
