require("dotenv").config();
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("./src/**/template.md");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Extensions
  eleventyConfig.addExtension("css", require("./lib/extensions/css.js"));

  // Markdown Parsing
  eleventyConfig.setLibrary("md", require("./lib/markdown.js"));

  // Filters
  eleventyConfig.addFilter("datetime", require("./lib/filters/datetime.js"));
  eleventyConfig.addFilter("groupByYear", require("./lib/filters/groupyear.js"));
  eleventyConfig.addFilter("hostname", require("./lib/filters/hostname.js"));
  eleventyConfig.addFilter("limit", require("./lib/filters/limit.js"));
  eleventyConfig.addFilter("markdown", require("./lib/filters/markdown.js"));

  // Shortcodes
  eleventyConfig.addShortcode("image", require("./lib/shortcodes/image.js"));

  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  // Collections
  eleventyConfig.addCollection("articles", require("./lib/collections/articles.js"));
  eleventyConfig.addCollection("books", require("./lib/collections/books.js"));
  eleventyConfig.addCollection("notes", require("./lib/collections/notes.js"));
  eleventyConfig.addCollection("sitemap", require("./lib/collections/sitemap.js"));

  // Transforms
  eleventyConfig.addTransform("htmlmin", require("./lib/transforms/htmlmin.js"));

  // Pass-through files
  eleventyConfig.addPassthroughCopy("./src/**/*.(jpg|webp|png|svg|ico)");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  // Asset Watch Targets
  eleventyConfig.addWatchTarget("./src/assets/css");

  // Base Config
  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
    },
    passthroughFileCopy: true,
    templateFormats: ["css", "md", "njk", "11ty.js"],
  };
};
