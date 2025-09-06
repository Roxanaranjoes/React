export default {
  "**/*.{ts,tsx,js,jsx,mjs,cjs}": [
    "eslint --fix",
    "prettier --write"
  ],
  "**/*.{json,md,css}": [
    "prettier --write"
  ]
};

