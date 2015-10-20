// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    var id = response.result.items[0].id.videoId;
    console.log(response.result.items[0].id);
    console.log(response.result.items[0].id.videoId);
    $(function(){
      $("#frame").attr("src", "http://www.youtube.com/embed/"+ id +"?rel=0&autoplay=1");
      $("#frame").append('allowfullscreen');
    });
    $('#search-container').append('<pre>' + str + '</pre>' + '<br>');
  });
}