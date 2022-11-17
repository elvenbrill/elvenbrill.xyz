module.exports = {
  pageTitle: (data) => `${data.title} · ${data.site.title}`,
  pageDescription: (data) => `${data.summary}`,
  canonicalUrl: (data) => (data.canonical && data.canonical.url ? data.canonical.url : data.site.url + data.page.url),
};
