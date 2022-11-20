module.exports = {
  layout: "note",
  type: "entry-untitled",
  permalink: '/notes/{{ date | date: "%s" }}/',
  tags: ["post", "note"],
  eleventyComputed: {
    title: 'Бележка от {{ date | date: "%d.%m.%Y, %H:%M" }}',
    summary: 'Кратка бележка публикувана на {{ date | date: "%d.%m.%Y" }}',
  },
};
