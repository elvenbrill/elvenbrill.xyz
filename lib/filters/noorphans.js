const normalise = require("../utils/normalise.js");

module.exports = (string) => {
  string = normalise(string, "");

  const indexOfLastSpace = string.lastIndexOf(" ");

  if (indexOfLastSpace === -1) {
    return string;
  }

  const begin = string.substring(0, indexOfLastSpace);
  const end = string.substring(indexOfLastSpace + 1);
  return `${begin}&nbsp;${end}`;
};
