// var data;
// var statePaths;

$(function() {
  var choropleth = new Choropleth();

  $('form').on('submit', function(event) {
  	event.preventDefault();
  	console.log($('#year').val());
  	choropleth.colorStates($('#year').val());
  });
});


























