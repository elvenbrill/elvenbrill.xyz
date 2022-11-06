module.exports = (collection) => {
  return collection.getAll().sort((a, b) => {
    if (typeof a.data.order !== "undefined" && typeof b.data.order !== "undefined") {
      return (a.data.order || 0) - (b.data.order || 0);
    } else {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    }
  });
};
