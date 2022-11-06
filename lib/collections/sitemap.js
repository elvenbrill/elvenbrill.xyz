module.exports = (collection) => {
  return collection.getAllSorted().filter((item) => {
    const extension = item.inputPath.split(".").pop();
    return extension === "md";
  });
};
