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
  eleventyConfig.addFilter("hostname", require("./lib/filters/hostname.js"));
  eleventyConfig.addFilter("limit", require("./lib/filters/limit.js"));
  eleventyConfig.addFilter("markdown", require("./lib/filters/markdown.js"));

  // Group posts by year
  // https://github.com/11ty/eleventy/discussions/2630
  eleventyConfig.addFilter("groupByYear", function (pages = []) {
    const pagesMap = {};
    for (const page of [...pages]) {
      const pageYear = page.date.getFullYear();
      const yearlyPosts = pagesMap[pageYear] || [pageYear, []];
      yearlyPosts[1].push(page);
      pagesMap[pageYear] = yearlyPosts;
    }

    return (
      Object.values(pagesMap)
        // Sort the year map in descending order.
        .sort(([year1], [year2]) => year2 - year1)
    );
  });

  // Shortcodes
  eleventyConfig.addShortcode("image", require("./lib/shortcodes/image.js"));

  // Plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Collections
  eleventyConfig.addCollection("articles", require("./lib/collections/articles.js"));
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
