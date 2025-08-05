import { config } from "@repo/eslint-config/react";
import storybook from "eslint-plugin-storybook";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["storybook-static/**"],
  },
];
