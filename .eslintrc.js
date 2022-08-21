module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  globals: {
    React: true,
  },
};
