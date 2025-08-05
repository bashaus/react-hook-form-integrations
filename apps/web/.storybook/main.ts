import type { StorybookConfig } from "@storybook/react-webpack5";
import { dirname, join } from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/components/**/stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@storybook/addon-docs"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),

  webpackFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.plugins = config.resolve.plugins ?? [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};

export default config;
