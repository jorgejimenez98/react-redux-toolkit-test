module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react-refresh", "import", "@typescript-eslint"],
  rules: {
    /* ---------------------- ESLINT --------------------- */

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "arrow-parens": ["error", "as-needed"],
    "import/no-unresolved": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "comma-spacing": "error",
    "keyword-spacing": "error",
    "no-unused-vars": "error",
    "no-var": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "space-before-blocks": "error",
    "complexity": ["error", 20],
    "comma-dangle": ["error", "never"],
    "indent": ["error", 2, { SwitchCase: 1 }],
    "max-len": [
      "error",
      {
        code: 180,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    /* ------------------------------- IMPORTS ---------------------------------- */
    "import/order": ["error", {
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["react"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
