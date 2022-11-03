require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("./src/**/template.md");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
