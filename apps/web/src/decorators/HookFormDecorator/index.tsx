import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { FormEmitter } from "@repo/storybook-hookform/preview";
import { ComponentType } from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { action } from "storybook/actions";

export type HookFormDecoratorOptions = {
  githubPath: string;
  buttons?: { [title: string]: string };
};

export default function HookFormDecorator<TFieldValues extends FieldValues>(
  props: UseFormProps<TFieldValues>,
  options: HookFormDecoratorOptions,
) {
  return function HookFormDecoratorImpl(Story: ComponentType) {
    const { githubPath, buttons = [] } = options;

    const form = useForm<TFieldValues>(props);
    const { formState, handleSubmit } = form;

    const { isSubmitting } = formState;

    const onSubmit = handleSubmit(action("onValid"), action("onInvalid"));

    return (
      <FormProvider {...form}>
        <FormEmitter />

        <Card component="form" onSubmit={onSubmit}>
          <Box p={2}>
            <Story />
          </Box>

          <Stack direction="row" p={2} spacing={2} bgcolor="grey.100">
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
                startIcon={<GitHubIcon />}
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
                startIcon={<OpenInNewIcon />}
              >
                {title}
              </Button>
            ))}
          </Stack>
        </Card>
      </FormProvider>
    );
  };
}
