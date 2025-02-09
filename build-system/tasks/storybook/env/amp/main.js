const rootDir = '../../../../..';

module.exports = {
  staticDirs: [rootDir],
  stories: [
    `${rootDir}/src/builtins/storybook/*.amp.js`,
    `${rootDir}/extensions/**/*.*/storybook/*.amp.js`,
  ],
  addons: [
    // TODO(alanorozco): AMP previews are loaded inside an iframe, so the a11y
    // addon is not able to inspect the tree inside it. Its results are incorrect,
    // since it only checks the structure of the outer iframe element.
    // Enable this once we find a way to inspect the iframe document's tree.
    // '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    '@storybook/addon-controls/register',
    // TODO(#35923): Remove addon-knobs once all stories are migrated to
    // addon-controls (args/argTypes).
    '@storybook/addon-knobs',
    '@ampproject/storybook-addon',
  ],
  webpackFinal: (config) => {
    // Disable entry point size warnings.
    config.performance.hints = false;
    return config;
  },
};
