$(function() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25&callback=", function(quotes) {
    displayQuote(quotes);
    $('#newQuote').on('click', function(event) {
      event.preventDefault();
      displayQuote(quotes);
    });
  });
});

function displayQuote(quotes) {
  var randomNum = Math.floor(Math.random() * (quotes.length + 1));
  $("#quote").html(quotes[randomNum].content).append($('<footer/>').text(quotes[randomNum].title));
  $('#tweetQuote').attr({
    href: "https://twitter.com/intent/tweet?text=" + parseQuote(quotes[randomNum].content) + ' -' + quotes[randomNum].title
  })
};

function parseQuote(quote) {
  return quote.slice(3, -5);
}
