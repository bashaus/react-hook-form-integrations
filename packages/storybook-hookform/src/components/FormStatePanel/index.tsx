import { useEffect, useState } from "react";
import { FieldValues, FormState } from "react-hook-form";
import ReactJson from "react-json-view";
import { AddonPanel, EmptyTabContent } from "storybook/internal/components";
import { addons } from "storybook/manager-api";

import { EVENT_FORM_STATE_UPDATE } from "../../constants";

export type FormStatePanelProps = Readonly<{
  active?: boolean;
}>;

export default function FormStatePanel({
  active = false,
}: FormStatePanelProps) {
  const [formState, setFormState] = useState<object | null>(null);

  useEffect(() => {
    const handler = (payload: FormState<FieldValues>) => {
      setFormState(payload);
    };

    const channel = addons.getChannel();
    channel.on(EVENT_FORM_STATE_UPDATE, handler);
    return () => channel.off(EVENT_FORM_STATE_UPDATE, handler);
  }, []);

  return (
    <AddonPanel active={active}>
      <div style={{ padding: 16 }}>
        {formState ? (
          <ReactJson name="formState" src={formState} />
        ) : (
          <EmptyTabContent
            title="Waiting for form state."
            description="If you're still seeing this message, ensure that FormEmitter has been added to the story."
          />
        )}
      </div>
    </AddonPanel>
  );
}
