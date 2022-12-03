module.exports = {
  layout: "layouts/note.njk",
  type: "entry-untitled",
  permalink: "/notes/{{ page.fileSlug }}/",
  tags: ["post", "note"],
  eleventyComputed: {
    pageTitle: "Бележка от {{ page.date.toLocaleString }}",
    summary: "Кратка бележка, записана на {{ page.date.toLocaleString }}",
  },
};
