$(document).ready(function() {
  console.log("DOM Starts!")
 
  $("#tweet-text").keydown(function() {
    let tweet = $(this).val().length;
    console.log(tweet);
    const limit = $('.counter');
    let maxVal = 140;
    limit.val(maxVal - tweet );

    if (tweet > 140) {

      limit.css('color', 'red');
    }
    else {
      limit.css('color', 'black');
    }

  });
});