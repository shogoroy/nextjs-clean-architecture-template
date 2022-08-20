module.exports = {
  "*.{js,jsxts,tsx}": ["eslint --fix"],
  ".{md,yaml,yml,json,.config.js}": ["prettier --write"],
  "package.json": ["sort-package-json"],
};
