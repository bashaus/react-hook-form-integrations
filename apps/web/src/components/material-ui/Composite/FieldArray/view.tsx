import { ErrorMessage } from "@hookform/error-message";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

import { MuiCompositeFieldArraySchema } from "./schema";

export default function MuiCompositeFieldArrayView() {
  const { control } = useFormContext<MuiCompositeFieldArraySchema>();
  const fieldArray = useFieldArray({
    control,
    name: "muiCompositeFieldArray",
  });
  const { fields, append, remove, swap, prepend } = fieldArray;

  return (
    <Controller
      control={control}
      name="muiCompositeFieldArray"
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid} fullWidth>
          <Stack spacing={2}>
            <Box>
              <Button
                variant="text"
                startIcon={<AddCircleIcon />}
                onClick={() => prepend({ fieldName: "" })}
              >
                Add to top
              </Button>
            </Box>

            <Card>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell width="90%">Field name</TableCell>
                      <TableCell>
                        <IconButton disabled>
                          <RemoveCircleIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton disabled>
                          <ArrowUpwardRoundedIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton disabled>
                          <ArrowDownwardRoundedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {fields.map((field, i) => (
                      <TableRow key={field.id}>
                        <Controller
                          name={`muiCompositeFieldArray.${i}.fieldName`}
                          control={control}
                          render={({ field, fieldState }) => (
                            <TableCell>
                              <TextField
                                {...field}
                                error={fieldState.invalid}
                                helperText={<ErrorMessage name={field.name} />}
                                fullWidth
                              />
                            </TableCell>
                          )}
                        />

                        <TableCell>
                          <Tooltip title="Remove">
                            <IconButton onClick={() => remove(i)}>
                              <RemoveCircleIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>

                        <TableCell>
                          {i != 0 && (
                            <Tooltip title="Move up">
                              <IconButton onClick={() => swap(i, i - 1)}>
                                <ArrowUpwardRoundedIcon />
                              </IconButton>
                            </Tooltip>
                          )}
                        </TableCell>

                        <TableCell>
                          {i !== fields.length - 1 && (
                            <Tooltip title="Move down">
                              <IconButton onClick={() => swap(i, i + 1)}>
                                <ArrowDownwardRoundedIcon />
                              </IconButton>
                            </Tooltip>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>

            <Box>
              <Button
                variant="text"
                startIcon={<AddCircleIcon />}
                onClick={() => append({ fieldName: "" })}
              >
                Add to bottom
              </Button>
            </Box>

            <FormHelperText>
              <ErrorMessage name={`${field.name}`} />
              <ErrorMessage name={`${field.name}.root`} />
            </FormHelperText>
          </Stack>
        </FormControl>
      )}
    />
  );
}
