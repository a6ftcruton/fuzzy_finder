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
          $('#result-count').text(matches + " potential matches");
          counter++;
      } else {
          $('#result-count').text(matches + " potential matches");
      }
    });
  });

});

// load the results of the file, then split them on the newline character
// on first page load, display first 10 urls, create an li  (use underscore)
// as user types,display only those urls that contain those letters in that order 
//   to use a regexp: /a.*b.*c/   where a b and c are the letters typed...
