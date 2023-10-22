module.exports = {
    "env": {
          "browser": true,
          "es2021": true
      },
      "extends": "eslint:recommended",
      "overrides": [
        {
          "files": ["**/*.test.js"],
          "env": { "jest": true },
          "plugins": ["jest"],
          "extends": ["plugin:jest/recommended"],
          "rules": { "jest/prefer-expect-assertions": "off" }
        }
      ],
      "parserOptions": {
          "ecmaVersion": "latest",
          "sourceType": "module"
      },
      "rules": {
      }
  };
module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
};
