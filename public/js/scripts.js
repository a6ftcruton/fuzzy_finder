$(document).ready(function() {
  file = "http://localhost:4567/lib/urls.txt"
  $.get(file, function(data){
    console.log(data)
  });
  $('#search-bar').keyup(function(data) {
    $('.results').append($('#search-bar').val());
  });
});
