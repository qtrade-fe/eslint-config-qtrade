module.exports = Object.assign({}, require("./eslintrc.json"), {
  parser: "babel-eslint",
  env: {
    browser: true
  }
});
