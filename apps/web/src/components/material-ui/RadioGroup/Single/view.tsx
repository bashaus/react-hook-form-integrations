import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { MuiRadioGroupSchema } from "./schema";

export default function MuiRadioGroupView() {
  const { control } = useFormContext<MuiRadioGroupSchema>();

  return (
    <Controller
      name="muiRadioGroup"
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <RadioGroup>
            {seasons.map((season) => (
              <FormControlLabel
                key={season}
                label={season}
                control={<Radio {...field} value={season} />}
              />
            ))}

            <ErrorMessage name={field.name} as={FormHelperText} />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
