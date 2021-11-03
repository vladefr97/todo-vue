const path = require("path");
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    // Use vanilla js rules as the base
    // https://standardjs.com/rules.html
    "standard",
    // Extend with eslint rules
    // https://eslint.org/docs/rules/
    "eslint:recommended",
    // Add vue rules
    // https://eslint.vuejs.org/rules/
    "plugin:vue/recommended",
    // Turn off rules that conflict with Prettier
    "@vue/prettier",
    // Add rules for import order / dependency resolution
    // https://github.com/benmosher/eslint-plugin-import
    "plugin:import/recommended",
    // Add rules for async calls
    // https://github.com/xjamundx/eslint-plugin-promise
    "plugin:promise/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: "module",
  },
  rules: {
    // we should always disable console logs and debugging in production
    "no-console": process.env.IS_DEVELOPMENT ? "off" : "error",
    "no-debugger": process.env.IS_DEVELOPMENT ? "off" : "error",
    "import/no-relative-parent-imports": "off",
    "import/order": "error",
    "max-len": [
      "error",
      140, // max-len in chars
      2, // default tab width
      {
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    "vue/no-v-html": "off",
    "promise/no-callback-in-promise": "off",
    camelcase: [2, { properties: "always" }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", path.resolve(__dirname, "./src")],
          ["@pages", path.resolve(__dirname, "./src/ui/pages")],
          ["~", path.resolve(__dirname, "./src/static/styles")],
        ],
        extensions: [".js", ".scss", ".json", ".vue"],
      },
    },
  },
};
