const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error"
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/react-proptypes": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    quotes: ["error", "double", { avoidEscape: true }],
    semi: [2, "always"]
  }
};
