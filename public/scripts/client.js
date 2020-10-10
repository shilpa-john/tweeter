/*Client-side JS logic goes here*/
 $(document).ready(function() {

//This function evaluates the text input by user and re-encodes the text to avoid unsafe characters converting into safe 'encoded' form
   const escape =  function(str) {
    let div     = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

//Create tweet element function for New Tweet!
const createTweetElement = function(data) {
  
  let newTweet = `
  <div class="tweet">
  <div class="tweet-header">
  <img src= ${data.user.avatars} class="tweeter-icon">
  <p class="tweeter-name"> ${data.user.name} </p>
  <p class="handle"> ${data.user.handle} </p>
  </div>
  <h2 class="tweet1">${escape(data.content.text)}</h2>
  <div class="tweet-footer">
  <p class="days-ago"> ${moment(data.created_at).toNow(true)} ago </p>
  <p class="small-icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
  </div>
  </div>`;

return newTweet;
};

 //To toggle tweet input form
    $('.angled-arrow').click(function() {
    $(".btn-and-input").slideToggle("slow");
  });
 
 //Submit function for submitting a new tweet
  $( '#tweet-form').submit(function( event ) {
    event.preventDefault();
    $.ajax({
        url: '/tweets',
        method: "POST" ,
        data: $(this).serialize(),
      })
      .then((res) => {
        console.log("Success")
        loadTweets()
      })
});

// Loops through tweets and calls createTweetElement for each tweet.
// Also takes return value and appends it to the tweets container

const renderTweets = function(tweets) {
  $('.tweets-container').empty();
  for (const tweet of tweets) {
     const $tweet = createTweetElement(tweet);
     $('.tweets-container').prepend($tweet); //Changed to prepend for display at top of web page
  }
}

//Loads current collection of tweets onto the page
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: "GET",
    })
      .then ((res) => {
        $('.tweets-container').empty();
        renderTweets(res);
      })
  };
  loadTweets()
});