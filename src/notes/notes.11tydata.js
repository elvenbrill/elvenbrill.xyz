module.exports = {
  layout: "note",
  type: "entry-untitled",
  permalink: '/notes/{{ date | date: "%s" }}/',
  tags: ["post", "note"],
  eleventyComputed: {
    title: 'Бележка: {{ date | date: "%d.%m.%Y, %H:%M" }}',
  },
};
