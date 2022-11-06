require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("./src/**/template.md");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Liquid
  eleventyConfig.setLiquidOptions({
    globals: {
      site: require("./src/_data/site.js"),
    },
    layouts: "./src/_layouts",
  });

  // Libraries
  eleventyConfig.setLibrary("md", require("./lib/markdown.js"));

  // Extensions
  eleventyConfig.addExtension("css", require("./lib/extensions/css.js"));

  // Filters
  eleventyConfig.addFilter("datetime", require("./lib/filters/datetime.js"));
  eleventyConfig.addFilter("hostname", require("./lib/filters/hostname.js"));
  eleventyConfig.addFilter("limit", require("./lib/filters/limit.js"));
  eleventyConfig.addFilter("markdown", require("./lib/filters/markdown.js"));
  eleventyConfig.addFilter("noOrphans", require("./lib/filters/no-orphans.js"));

  // Plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  // Collections
  eleventyConfig.addCollection("articles", require("./lib/collections/articles.js"));
  eleventyConfig.addCollection("ordered", require("./lib/collections/ordered.js"));
  eleventyConfig.addCollection("sitemap", require("./lib/collections/sitemap.js"));

  // Transforms
  eleventyConfig.addTransform("htmlmin", require("./lib/transforms/htmlmin.js"));

  // Passthrough
  eleventyConfig.addPassthroughCopy("./src/key.txt");
  eleventyConfig.addPassthroughCopy("./src/**/*.(jpg|webp|png|svg|ico)");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/scripts");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/styles");

  // Config
  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["css", "liquid", "md", "11ty.js"],
  };
};
