$(document).ready(function() {
  console.log("DOM Starts!")
 
  $("#tweet-text").keydown(function() {
    let tweet = $(this).val().length;
    const limit = $('.counter');
    let maxVal = 140;
    limit.val(maxVal - tweet );

    if (tweet > 140) {

      limit.css('color', 'red');
      alert("Tweet is way too long, limit to 140 characters please!!")

    }
    else {
      limit.css('color', 'black');
    }
  });

  $('#submit-button').click(function() {
    $('.counter').val(140);
    if ($('#tweet-text').val() === "") {
      alert("Blanks tweets are not good!");

    } else if ($('#tweet-text').val().length > 140) {
      ralert("Tweet is too long, respect 140 character rule!!")

    }
  })
});