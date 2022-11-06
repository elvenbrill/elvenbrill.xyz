const { DateTime } = require("luxon");

module.exports = (string, format) => {
  const dateObject = string === "now" ? DateTime.local().toJSDate() : string;

  let date = DateTime.fromJSDate(dateObject, {
    locale: "bg",
    zone: "UTC",
  });

  if (format) {
    date = DateTime.fromISO(date).setLocale("bg").toFormat(format);
  } else {
    date = date.toISO();
  }

  return date;
};
