$(document).ready(function() {

  //Function to render error to user about tweet length!
  const renderError = function(message) {
    $('#error').remove();
    const error = $(`<div id="error"> ${message} </div>`);
    $('.new-tweet').prepend(error);
    $('#error').slideDown("slow"); //animations;
  };
  $("#tweet-text").keydown(function() {
    let tweet = $(this).val().length;
    const limit = $('.counter');
    const maxVal = 140;
    limit.val(maxVal - tweet );

    if (tweet > 140) {

      limit.css('color', 'red');
      renderError("Tweet way too long, please respect 140 character rule!!");
      $('#submit_tweet').prop('disabled', true); //disable it
    }
    else {
      limit.css('color', 'black');
      $('#error').remove();
      $('#submit_tweet').prop('disabled', false); //enable it so it can submit
    }
  });

  $('#submit_tweet').click(function() {
    $('.counter').val(140);
    if ($('#tweet-text').val() === "") {
      renderError(" &#129488 Type something before you can post it!");
    } else if ($('#tweet-text').val().length > 140) {
      renderError("Tweet way too long, please respect 140 character rule!!");
    }
  });
});