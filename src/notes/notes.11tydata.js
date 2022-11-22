module.exports = {
  layout: "layouts/note.njk",
  title: "Бележка",
  summary: "Кратка бележка, публикувана в този сайт или в Мастодон",
  type: "entry-untitled",
  permalink: "/notes/{{ page.fileSlug }}/",
  tags: ["post", "note"],
};
