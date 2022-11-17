require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("./src/**/template.md");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Libraries
  eleventyConfig.setLibrary("md", require("./lib/markdown.js"));

  // Extensions
  eleventyConfig.addExtension("css", require("./lib/extensions/css.js"));

  // Filters
  eleventyConfig.addFilter("datetime", require("./lib/filters/datetime.js"));
  eleventyConfig.addFilter("hostname", require("./lib/filters/hostname.js"));
  eleventyConfig.addFilter("limit", require("./lib/filters/limit.js"));
  eleventyConfig.addFilter("markdown", require("./lib/filters/markdown.js"));
  eleventyConfig.addFilter("noorphans", require("./lib/filters/noorphans.js"));

  // Plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  // Collections
  eleventyConfig.addCollection("notes", require("./lib/collections/notes.js"));
  eleventyConfig.addCollection("pages", require("./lib/collections/pages.js"));
  eleventyConfig.addCollection("sitemap", require("./lib/collections/sitemap.js"));

  // Transforms
  eleventyConfig.addTransform("htmlmin", require("./lib/transforms/htmlmin.js"));

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
    },
    passthroughFileCopy: true,
    templateFormats: ["css", "md", "njk", "11ty.js"],
  };
};
