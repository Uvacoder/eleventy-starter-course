const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);

  config.addPlugin(rssPlugin);

  config.addCollection("work", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md"));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection("featuredWork", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md")).filter(
      (x) => x.data.featured
    );
  });

  // Create blog collection, spread syntax is so we can reverse the array as it mutates it, we could also use | reverse nunjucks filter
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  // Create a people collection. Returns a list of people ordered by filename. fileSlug refers to the filename without the extension.
  config.addCollection("people", (collection) => {
    return collection.getFilteredByGlob("./src/people/*.md").sort((a, b) => {
      return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
    });
  });

  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
