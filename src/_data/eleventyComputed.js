module.exports = {
  pageTitle: (data) => `${data.title} · ${data.site.title}`,
  pageImage: (data) => (data.photo ? data.photo[0] || data.photo : false),
  canonicalUrl: (data) => (data.canonical && data.canonical.url ? data.canonical.url : data.site.url + data.page.url),
  photos: (data) => (data.photo ? (Array.isArray(data.photo) ? data.photo : [data.photo]) : false),
};
