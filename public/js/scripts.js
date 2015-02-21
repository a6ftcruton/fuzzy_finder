$(document).ready(function() {
  var urls;

  function parseFile(file) {
    urls = file.split('\n');
  }

  $.get("urls.txt", parseFile);

  $('#search-bar').keyup(function() {
    var matches = 0;
    var userSearch = $('#search-bar').val().split("").join(".*");
    var matchedUrls = function(url, totalMatches) {
      $('#result-count').text( totalMatches + " potential matches");
    };

    $('#urlList').empty();
    
    urls.forEach(function(url) {
      var regex = /\.(.*)(?=\.)/;
      if(regex.exec(url)[1] != null) {
        var subdomain = regex.exec(url)[1];
      } 
        if( $('#search-bar').val() == false) {
          $('#result-count').empty();
        } else if( subdomain.match(userSearch) ) {
          matches++; 
          $('#urlList').append('<li class="url-result"><a href="' + url + '">' + url + '</a></li>');
          matchedUrls(url, matches);
        } else {
          matchedUrls(url, matches);
        }
    });
  });

});

// exact matches should be filtered out 
