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
import ReactJson from "react-json-view";

export type FormDecoratorOptions = {
  githubPath: string;
  buttons?: { [title: string]: string };
};

export default function FormDecorator<Schema extends FieldValues>(
  props: UseFormProps<Schema>,
  options: FormDecoratorOptions,
) {
  return function FormDecoratorImpl(Story: ComponentType) {
    const { githubPath, buttons = [] } = options;

    const form = useForm<Schema>(props);
    const { formState, handleSubmit, watch } = form;
    const { errors, isSubmitted, isValid } = formState;

    const values = watch();

    return (
      <FormProvider {...form}>
        <Card>
          <Stack component="form" onSubmit={handleSubmit(() => {})}>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[200],
                padding: 2,
              })}
            >
              <Story />
            </Box>

            <Stack direction="row" p={2} spacing={2}>
              <Button type="submit">Submit</Button>

              <Divider orientation="vertical" flexItem />

              {githubPath && (
                <Button
                  href={`https://github.com/bashaus/react-hook-form-integrations/tree/main/apps/web/src/components/${githubPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                >
                  View on GitHub
                </Button>
              )}

              {Object.entries(buttons).map(([title, url]) => (
                <Button
                  href={url}
                  key={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                >
                  {title}
                </Button>
              ))}
            </Stack>

            {isSubmitted && (
              <>
                <Divider />
                {isValid && (
                  <Alert severity="success">
                    The user input contains valid values.
                  </Alert>
                )}

                {!isValid && (
                  <Alert severity="error">
                    The user input <strong>does not</strong> contain valid
                    values.
                  </Alert>
                )}

                <Divider />

                <CardHeader title="Form values" />
                <CardContent>
                  <ReactJson src={values} name="values" />
                </CardContent>

                <Divider />

                <CardHeader title="Form errors" />
                <CardContent>
                  <ReactJson src={errors} name="errors" />
                </CardContent>
              </>
            )}
          </Stack>
        </Card>
      </FormProvider>
    );
  };
}
