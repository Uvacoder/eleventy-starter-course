// Runs a function to check if the url of a page (itemUrl) matches the pageUrl, adds a aria attribute for accessibility and an active link data attribute

module.exports = {
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },
};
