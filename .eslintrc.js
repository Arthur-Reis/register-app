{
  "env": {
      "es2021": true
  },
  "extends": [
      "plugin:react/recommended",
      "standard"
  ],
  "space-before-function-paren": ["error", "never"],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "multiline-ternary" : "off"
  }
}
