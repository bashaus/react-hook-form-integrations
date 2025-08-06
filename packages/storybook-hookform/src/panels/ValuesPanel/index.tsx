import { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import { AddonPanel, EmptyTabContent } from "storybook/internal/components";
import { addons } from "storybook/manager-api";

import { EVENT_SUBMIT_VALUES } from "../../constants";

export type ValuesPanelProps = Readonly<{
  active?: boolean;
}>;

export default function ValuesPanel({ active = false }: ValuesPanelProps) {
  const [values, setValues] = useState<unknown>(null);

  useEffect(() => {
    const channel = addons.getChannel();
    const handler = (payload: unknown) => setValues(payload);
    channel.on(EVENT_SUBMIT_VALUES, handler);
    return () => channel.off(EVENT_SUBMIT_VALUES, handler);
  }, []);

  return (
    <AddonPanel active={active}>
      <div style={{ padding: 16 }}>
        {values ? (
          <ReactJson name="values" src={values} />
        ) : (
          <EmptyTabContent
            title="No values received."
            description="Submit the form to see update these values. If you're still seeing this error, ensure that HookFormDecorator has been added to the story."
          />
        )}
      </div>
    </AddonPanel>
  );
}
