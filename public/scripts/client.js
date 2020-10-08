/*Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function() {

//Create tweet element function for New Tweet!
const createTweetElement = function(data) {
  let newTweet = `
    <div class="tweet">
    <div class="tweet-header">
    <img src= ${data.user.avatars} class="tweeter-icon">
    <p class="tweeter-name"> ${data.user.name} </p>
    <p class="handle"> ${data.user.handle} </p>
    </div>
    <h2 class="tweet1">${data.content.text}</h2>
    <div class="tweet-footer">
    <p class="days-ago"> ${data.created_at}}</p>
    <p class="small-icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
    </article>
    </div>`;

  return newTweet;
    //$('#tweets-container').append(newTweet); 
};

  //To toggle tweet input form
 $('.angled-arrow').click(function() {
  $(".btn-and-input").slideToggle("slow");
});
 
 //Submit function for submitting a new tweet
  $( '#tweet-button').submit(function( event ) {
    event.preventDefault();
   /* if ($('#tweet-button').val().length <= 0) {
      $('.empty-alert');
    } else if ($('#tweet-button').val().length > 140) {
      $('.over-alert');
    } 
   else {*/

 //AJAX post request to send data to server
  $.ajax({
        url: '/tweets',
        method: "POST" ,
        data: $(this).serialize()
      })
      .then((res) => {
        console.log("Success")
        loadTweets()
        $('#tweet-button').val("");
      });
});


// Loops through tweets and calls createTweetElement for each tweet.
// Also takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  $('.tweets-container').empty();
  for (const tweet of tweets) {
     const $tweet = createTweetElement(tweet);
     $('.tweets-container').prepend($tweet);
  }
}

//Function To Load Tweets
const loadTweets = () => {
  $.get("/tweets")
    .then(response => renderTweets(response))
    .catch(e => $(".tweets-container").prepend(`<h1>SOMETHING'S WRONG</h1>`));
};

loadTweets();

});