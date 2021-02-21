/**
 * Given an array of urls, returns the one that has the searched term
 * @param {string[]} urlsArray Array of urls
 * @param {string} queryTerm Searched string to find in the array
 */
function filterByTerm(urlsArray, queryTerm) {
  return urlsArray.filter(function (url) {
    return url.match(queryTerm);
  });
}

module.exports = filterByTerm;
