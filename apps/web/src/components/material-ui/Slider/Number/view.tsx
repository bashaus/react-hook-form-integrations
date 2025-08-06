import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Controller, useFormContext } from "react-hook-form";

import { MuiSliderNumberSchema } from "./schema";

export default function MuiSliderNumberView() {
  const { control } = useFormContext<MuiSliderNumberSchema>();

  return (
    <Controller
      name="muiSliderNumber"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <FormLabel>Slider</FormLabel>
          <Slider {...field} min={0} max={100} />
          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
