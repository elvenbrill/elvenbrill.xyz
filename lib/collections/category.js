module.exports = (collectionApi) => {
  let catSet = new Set();

  collectionApi
    .getAllSorted()
    .forEach((item) => typeof item.data.category === "string" && catSet.add(item.data.category));

  return [...catSet];
};
