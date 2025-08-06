import { useEffect, useState } from "react";
import { FieldValues, FormState } from "react-hook-form";
import ReactJson from "react-json-view";
import { AddonPanel, EmptyTabContent } from "storybook/internal/components";
import { addons } from "storybook/manager-api";

import { EVENT_FORM_STATE_UPDATE } from "../../constants";

export type FormErrorsPanelProps = Readonly<{
  active?: boolean;
}>;

export default function FormErrorsPanel({
  active = false,
}: FormErrorsPanelProps) {
  const [errors, setErrors] = useState<object | null>(null);

  useEffect(() => {
    const handler = (payload: FormState<FieldValues>) => {
      setErrors(payload.submitCount > 0 ? payload.errors : null);
    };

    const channel = addons.getChannel();
    channel.on(EVENT_FORM_STATE_UPDATE, handler);
    return () => channel.off(EVENT_FORM_STATE_UPDATE, handler);
  }, []);

  return (
    <AddonPanel active={active}>
      <div style={{ padding: 16 }}>
        {errors ? (
          <ReactJson name="errors" src={errors} />
        ) : (
          <EmptyTabContent
            title="Waiting for form submission."
            description="Submit the form to check for errors. If you're still seeing this error, ensure that FormEmitter has been added to the story."
          />
        )}
      </div>
    </AddonPanel>
  );
}
