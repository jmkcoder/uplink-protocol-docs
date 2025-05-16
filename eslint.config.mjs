import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-css-tags": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-styled-jsx-in-document": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "jsx-a11y/img-redundant-alt": "off",
      "@next/next/no-page-custom-font": "off",
      "style-src": "off",
    },
  },
];

export default eslintConfig;
