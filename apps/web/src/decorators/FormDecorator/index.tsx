import { DevTool } from "@hookform/devtools";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { ComponentType } from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormProps,
} from "react-hook-form";

export default function FormDecorator<Schema extends FieldValues>(
  props: UseFormProps<Schema>,
) {
  return function FormDecoratorImpl(Story: ComponentType) {
    const form = useForm<Schema>(props);

    const values = form.watch();
    const { errors, isSubmitted, isValid } = form.formState;

    return (
      <FormProvider {...form}>
        <Card>
          <DevTool control={form.control} placement="top-right" />

          <Stack component="form" onSubmit={form.handleSubmit(() => {})}>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[200],
                padding: 2,
              })}
            >
              <Story />
            </Box>

            <Box p={2}>
              <Button type="submit">Submit</Button>
            </Box>

            {isSubmitted && (
              <>
                <Divider />

                <Alert severity={isValid ? "success" : "error"}>
                  {isValid && <>The user input contains valid values.</>}
                  {!isValid && (
                    <>
                      The user input <strong>does not</strong> contain valid
                      values.
                    </>
                  )}
                </Alert>

                <Divider />

                <CardHeader title="Form values" />
                <CardContent>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </CardContent>

                <Divider />

                <CardHeader title="Form errors" />
                <CardContent>
                  <pre>{JSON.stringify(errors, null, 2)}</pre>
                </CardContent>
              </>
            )}
          </Stack>
        </Card>
      </FormProvider>
    );
  };
}
