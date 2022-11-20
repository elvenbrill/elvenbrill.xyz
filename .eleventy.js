const pluginRss = require("@11ty/eleventy-plugin-rss");
require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("./src/**/template.md");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Extensions
  eleventyConfig.addExtension("css", require("./lib/extensions/css.js"));

  // Liquid
  eleventyConfig.setLiquidOptions({
    globals: {
      site: require("./src/_data/site.js"),
      navigation: require("./src/_data/navigation.js"),
    },
    layouts: "./src/_layouts",
  });

  // Libraries
  eleventyConfig.setLibrary("md", require("./lib/markdown.js"));

  // Filters
  eleventyConfig.addFilter("datetime", require("./lib/filters/datetime.js"));
  eleventyConfig.addFilter("hostname", require("./lib/filters/hostname.js"));
  eleventyConfig.addFilter("limit", require("./lib/filters/limit.js"));
  eleventyConfig.addFilter("markdown", require("./lib/filters/markdown.js"));
  eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);

  // Shortcodes
  eleventyConfig.addShortcode("image", require("./lib/shortcodes/image.js"));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Plugins

  // Collections
  eleventyConfig.addCollection("articles", require("./lib/collections/articles.js"));
  eleventyConfig.addCollection("category", require("./lib/collections/category.js"));
  eleventyConfig.addCollection("notes", require("./lib/collections/notes.js"));
  eleventyConfig.addCollection("pages", require("./lib/collections/pages.js"));

  // Transforms
  // eleventyConfig.addTransform("htmlmin", require("./lib/transforms/htmlmin.js"));

  // Passthrough
  eleventyConfig.addPassthroughCopy("./src/**/*.(jpg|webp|png|svg|ico)");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/css");

  // Config
  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
    passthroughFileCopy: true,
    templateFormats: ["css", "liquid", "md", "11ty.js"],
  };
};
