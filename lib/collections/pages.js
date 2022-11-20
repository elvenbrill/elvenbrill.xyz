module.exports = (collectionApi) => {
  return collectionApi.getFilteredByTag("page").sort((a, b) => {
    return b.date - a.date;
  });
};
