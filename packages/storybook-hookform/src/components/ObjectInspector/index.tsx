import { Inspector } from "react-inspector";
import { useTheme } from "storybook/theming";

export type ObjectInspectorProps = Readonly<{
  name: string;
  data: unknown;
}>;

export default function ObjectInspector({ name, data }: ObjectInspectorProps) {
  const theme = useTheme();

  return (
    <Inspector
      sortObjectKeys
      showNonenumerable={false}
      name={name}
      data={data}
      expandLevel={2}
      theme={theme.addonActionsTheme ?? "chromeLight"}
      table={false}
    />
  );
}
