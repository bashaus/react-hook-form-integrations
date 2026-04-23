import ReactJson, { ReactJsonViewProps } from "react-json-view";
import { useTheme } from "storybook/theming";

import { themeDark, themeLight } from "./theme";

export type ViewJsonProps = Omit<ReactJsonViewProps, "theme">;

export default function ViewJson(props: ViewJsonProps) {
  const theme = useTheme();
  const isDark = theme.base === "dark";

  return <ReactJson {...props} theme={isDark ? themeDark : themeLight} />;
}
