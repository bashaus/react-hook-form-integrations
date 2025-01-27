import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import muiPathImportsPlugin from "eslint-plugin-mui-path-imports";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    ignores: ["dist/**"],
  },

  /* eslint-plugin-simple-import-sort */
  {
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  /* eslint-plugin-mui-path-imports */

  {
    plugins: {
      "mui-path-imports": muiPathImportsPlugin,
    },
    rules: {
      "mui-path-imports/mui-path-imports": "error",
    },
  },
];
