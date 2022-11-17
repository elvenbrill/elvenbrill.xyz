const markdown = require("markdown-it");

module.exports = (() => {
  function parseURL(string) {
    return `https://twitter.com/@${string}`;
  }

  const options = {
    html: true,
    linkify: true,
    typographer: true,
    quotes: "„ “‘’",
  };

  const plugins = [
    require("markdown-it-abbr"),
    [
      require("markdown-it-attribution"),
      {
        classNameContainer: false,
        classNameAttribution: false,
        marker: "—",
        removeMarker: false,
      },
    ],
    require("markdown-it-deflist"),
    require("markdown-it-footnote"),
    require("./markdown-it/footnote.js"),
    require("markdown-it-sub"),
    require("markdown-it-sup"),
  ];

  const parser = markdown(options);

  if (plugins) {
    for (const plugin of plugins) {
      if (Array.isArray(plugin)) {
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    }
  }

  return parser;
})();
