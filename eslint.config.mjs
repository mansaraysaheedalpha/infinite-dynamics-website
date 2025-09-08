// eslint.config.mjs
import nextPlugin from "@next/eslint-plugin-next/dist/index.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: ["node_modules/", ".next/", "out/", "build/", "next-env.d.ts"],
  }
];

export default config;