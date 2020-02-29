module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "@nuxtjs/eslint-config-typescript"
  ]
};
