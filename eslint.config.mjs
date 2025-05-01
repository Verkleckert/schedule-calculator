import { FlatCompat } from "@eslint/eslintrc";
import eslintParserTypeScript from "@typescript-eslint/parser";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"],
    overrides: [
      {
        files: ["src/Types.ts"],
        rules: {
          "@typescript-eslint/no-unused-vars": "off",
        },
      },
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": ["error"],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@/components/*/*/*"],
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  }),
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "readable-tailwind": eslintPluginReadableTailwind,
    },
    rules: {
      // Readable Tailwind
      ...eslintPluginReadableTailwind.configs.error.rules,

      "readable-tailwind/multiline": [
        "warn",
        {
          printWidth: 120,
          lineBreakStyle: "unix",
          preferSingleLine: true,
          group: "newLine",
        },
      ],

      // Prettier
      ...eslintPluginPrettierRecommended.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
        },
      ],
    },
  },
];

export default eslintConfig;