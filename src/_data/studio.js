const Cache = require("@11ty/eleventy-cache-assets");

// Eleventy cache plugin which caches retrieved data from fetch API and store it for a duration to avoid excessive http/API requests
// https://www.11ty.dev/docs/plugins/cache/
module.exports = async () => {
  try {
    const { items } = await Cache(
      "https://11ty-from-scratch-content-feeds.piccalil.li/media.json",
      {
        duration: "1d",
        type: "json",
      }
    );

    return items;
  } catch (err) {
    console.log(err);

    return [];
  }
};
