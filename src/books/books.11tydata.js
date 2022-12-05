module.exports = {
  layout: "layouts/book.njk",
  type: "entry",
  permalink: "/bookshelf/isbn-{{ page.fileSlug }}/",
  tags: ["post", "book"],
};
