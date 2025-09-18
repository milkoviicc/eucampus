module.exports = {
  root: true,
  env: { browser: true, node: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    // your rules
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // Next auto imports React
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  settings: { react: { version: "detect" } }
};
