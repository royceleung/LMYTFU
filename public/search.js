// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    type: 'video'
  });

  request.execute(function(response) {
    var id = response.result.items[0].id.videoId;
    var title = response.result.items[0].snippet.title;
    $(function(){
      $("#frame").attr("src", "http://www.youtube.com/embed/"+ id +"?rel=0&autoplay=1");
      $("#frame").append('allowfullscreen');
      $("#videoTitle").append(title);
    });
  });
}

function playlistSearch() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    type: 'playlist'
  });

  request.execute(function(response) {
    var id = response.result.items[0].id.playlistId;
    var title = response.result.items[0].snippet.title;
    $(function(){
      $("#frame").attr("src", "http://www.youtube.com/embed/?listType=playlist&list="+ id + "&autoplay=1");
      $("#frame").append('allowfullscreen');
      $("#videoTitle").html(title);
    });
  });
}