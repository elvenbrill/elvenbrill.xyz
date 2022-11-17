module.exports = (collectionApi) => {
  return collectionApi.getAllSorted().filter((item) => {
    const extension = item.inputPath.split(".").pop();
    return extension === "md";
  });
};
