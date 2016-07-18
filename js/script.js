$(function() {
  $.ajax({
    url: "http://quotes.stormconsultancy.co.uk/quotes.json",
    dataType: "jsonp",
    success: function(quotes) {
      displayQuote(quotes);
      $('#newQuote').on('click', function(event) {
        event.preventDefault();
        displayQuote(quotes);
      });
    },
  });
});

function displayQuote(quotes) {
  var randomNum = Math.floor(Math.random() * (quotes.length + 1));
  $("#quote").html(quotes[randomNum].quote).append($('<footer/>').text(quotes[randomNum].author));
  $('#tweetQuote').attr({
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes[randomNum].quote)}  -${encodeURIComponent(quotes[randomNum].author)}`
  })
};
