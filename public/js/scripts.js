$(document).ready(function() {
  var urls;

  function parseFile(file) {
    urls = file.split('\n');
  }

  $.get("urls.txt", parseFile);

  $('#search-bar').keyup(function() {
    var counter = 0;
    var matches = 0;
    $('#file').empty();

    var userSearch = $('#search-bar').val().split("").join(".*");

    urls.forEach(function(url) {
        if( url.match(userSearch) ) {
          matches++; 
          $('#file').append('<li class="url-result"><a href="' + url + '">' + url + '</a></li>');
          $('#result-count').text( (matches - 10) + " potential matches");
          counter++;
      } else {
          $('#result-count').text(matches + " potential matches");
      }
    });
  });

});

// remove the scheme and the last characters before the .   from the search results 
// exact matches should be filtered out 
// if there nothing in search bar, return matches without minusing 10
