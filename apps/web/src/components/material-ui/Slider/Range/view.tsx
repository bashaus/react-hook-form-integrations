import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Controller, useFormContext } from "react-hook-form";

import { MuiSliderRangeSchema } from "./schema";

export default function MuiSliderRangeView() {
  const { control } = useFormContext<MuiSliderRangeSchema>();

  return (
    <Controller
      name="muiSliderRange"
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
