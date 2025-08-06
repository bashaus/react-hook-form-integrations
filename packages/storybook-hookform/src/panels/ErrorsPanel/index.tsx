import { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import { AddonPanel, EmptyTabContent } from "storybook/internal/components";
import { addons } from "storybook/manager-api";

import { EVENT_SUBMIT_ERRORS } from "../../constants";

export type ErrorsPanelProps = Readonly<{
  active?: boolean;
}>;

export default function ErrorsPanel({ active = false }: ErrorsPanelProps) {
  const [errors, setErrors] = useState<object | null>(null);

  useEffect(() => {
    const channel = addons.getChannel();
    const handler = (payload: object) => setErrors(payload);
    channel.on(EVENT_SUBMIT_ERRORS, handler);
    return () => channel.off(EVENT_SUBMIT_ERRORS, handler);
  }, []);

  return (
    <AddonPanel active={active}>
      <div style={{ padding: 16 }}>
        {errors ? (
          <ReactJson name="errors" src={errors} />
        ) : (
          <EmptyTabContent
            title="Waiting for form submission."
            description="Submit the form to check for errors. If you're still seeing this error, ensure that HookFormDecorator has been added to the story."
          />
        )}
      </div>
    </AddonPanel>
  );
}
