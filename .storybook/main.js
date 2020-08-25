const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          atoms: path.resolve(__dirname, "../components/Atoms"),
          molecules: path.resolve(__dirname, "../components/Molecules"),
          organisms: path.resolve(__dirname, "../components/Organisms"),
          resources: path.resolve(__dirname, "../resources"),
          utils: path.resolve(__dirname, "../utils"),
          images: path.resolve(__dirname, "../images"),
          components: path.resolve(__dirname, "../components/"),
        },
        extensions: [".js", ".css", ".png", ".jpg", ".gif", ".jpeg"],
      },
    });
    return config;
  },
};
