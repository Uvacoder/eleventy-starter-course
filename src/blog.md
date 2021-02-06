---
title: "The Issue 33 Blog"
layout: "layouts/feed.html"
pagination:
  data: collections.blog
  size: 5
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer posts"
paginationNextText: "Older posts"
paginationAnchor: "#post-list"
---

<!-- Permalink we’re testing to see if the current pageNumber is greater than 0. If it is, we’re adding a /page/{{ pagination.pageNumber }} to our permalink. Also the reason we add index.html to the end is because Eleventy can generate any file we want. If not specified it
will generate a plain text file with the url instead of html -->

The latest articles from around the studio, demonstrating our design
thinking, strategy and expertise.
