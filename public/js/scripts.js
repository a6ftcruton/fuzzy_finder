$(document).ready(function() {
  var file = "http://localhost:4567/lib/urls.txt";

  $.get(file, function(data) {
    console.log(data);
    var urls = data;
  });

  $('#search-bar').keyup(function(data) {
    $('.results').empty().append($('#search-bar').val());
  });
});

// load the results of the file, then split them on the newline character
// on first page load, display first 10 urls, create an li  (use underscore)
// as user types,display only those urls that contain those letters in that order 
//   to use a regexp: /a.*b.*c/   where a b and c are the letters typed...
