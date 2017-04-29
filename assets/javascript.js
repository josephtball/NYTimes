
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=1d13e9bf429d471bbcf1e08e7a3c12ad"

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function (response) {
	console.log(response);
});