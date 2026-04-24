import { useEffect, useState } from "react";
import { AddonPanel, EmptyTabContent } from "storybook/internal/components";
import { addons } from "storybook/manager-api";

import { EVENT_FORM_VALUES_UPDATE } from "../../constants";
import ObjectInspector from "../ObjectInspector";

export type FormValuesPanelProps = Readonly<{
  active?: boolean;
}>;

export default function FormValuesPanel({
  active = false,
}: FormValuesPanelProps) {
  const [values, setValues] = useState<unknown>(null);

  useEffect(() => {
    const channel = addons.getChannel();
    const handler = (payload: unknown) => setValues(payload);
    channel.on(EVENT_FORM_VALUES_UPDATE, handler);
    return () => channel.off(EVENT_FORM_VALUES_UPDATE, handler);
  }, []);

  return (
    <AddonPanel active={active}>
      <div style={{ padding: "10px 5px 20px 15px" }}>
        {values ? (
          <ObjectInspector name="formValues" data={values} />
        ) : (
          <EmptyTabContent
            title="No values received."
            description="Submit the form to see update these values. If you're still seeing this error, ensure that FormEmitter has been added to the story."
          />
        )}
      </div>
    </AddonPanel>
  );
}
