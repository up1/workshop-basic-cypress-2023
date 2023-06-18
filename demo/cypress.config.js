const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'demo-01',
  e2e: {
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config)
      return config;
    },
  },
});
