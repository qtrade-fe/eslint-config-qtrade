module.exports = Object.assign({}, require("./eslintrc.json"), {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  env: {
    browser: true
  }
});
