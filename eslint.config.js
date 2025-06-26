import js from "@eslint/js";
import globals from "globals";
import reactRecommended, { plugins } from "eslint-plugin-react/configs/recommended";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime";
import reactHooksPlugin from "eslint-plugin-react-hooks/configs/recommended";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.{js, jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactRecommended,
  reactJSXRuntime,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules
  },
];
