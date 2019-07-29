module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  env: {
    browser: true,
    es6: true,
    // "node": true,
    // "commonjs": true,
  },
  settings: {
    react: {
      // Regex for Component Factory to use,
      // default to "createReactClass"
      createClass: "createReactClass",

      // Pragma to use, default to "React"
      pragma: "React",

      // React version. "detect" automatically picks the version you have installed.
      version: "detect",

      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn"t set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@typescript-eslint/parser",

  extends: [
    // "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/explicit-function-return-type": [
      // "warn",
      "off",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/interface-name-prefix": 0,

    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": ["off", { properties: "always" }],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: true,
      },
    ],

    "react/prop-types": "off",
    "react/display-name": "off",

    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],

    // -
    "no-console": "warn",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "arrow-parens": 0,
  },
};
