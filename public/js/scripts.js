$(document).ready(function() {
  var urls;

  function parseFile(file) {
    urls = file.split('\n');
  }

  $.get("urls.txt", parseFile);

  $('#search-bar').keyup(function() {
    var counter = 0;
    $('#file').empty();
    var userSearch = $('#search-bar').val().split("").join(".*");
    $('.results').empty().append($('#search-bar').val());

    urls.forEach(function(url) {
      if (counter < 15) {
        if( url.match(userSearch) ) {
          $('#file').append('<li class="url-result"><a href="' + url + '">' + url + '</a></li>');
          counter++;
        }
      }
    });
  });

});

// load the results of the file, then split them on the newline character
// on first page load, display first 10 urls, create an li  (use underscore)
// as user types,display only those urls that contain those letters in that order 
//   to use a regexp: /a.*b.*c/   where a b and c are the letters typed...
