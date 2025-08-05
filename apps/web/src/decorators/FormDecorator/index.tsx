import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { emitFormUpdate } from "@repo/storybook-hookform/preview";
import { ComponentType, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormProps,
} from "react-hook-form";

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

    const { isSubmitted, isSubmitting, errors } = formState;
    const values = watch();

    useEffect(() => {
      emitFormUpdate(isSubmitted ? values : null, isSubmitted ? errors : null);
    }, [values, errors, isSubmitted]);

    return (
      <FormProvider {...form}>
        <Card>
          <Stack component="form" onSubmit={handleSubmit(() => {})}>
            <Box
              bgcolor="grey.200"
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[200],
                padding: 2,
              })}
            >
              <Story />
            </Box>

            <Stack direction="row" p={2} spacing={2}>
              <Button
                type="submit"
                variant="contained"
                loading={isSubmitting}
                loadingPosition="start"
                startIcon={<ChevronRightIcon />}
              >
                Submit
              </Button>

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
          </Stack>
        </Card>
      </FormProvider>
    );
  };
}
