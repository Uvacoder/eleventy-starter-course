// Takes a collection and returns it bay in display order marked in the .md files
module.exports = (collection) =>
  collection.sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
