// var data;
// var statePaths;

$(function() {
  var choropleth = new Choropleth();

  $('#year').on('change', function(event) {
  	event.preventDefault();
  	// console.log($('#year').val());
  	choropleth.colorStates($(this).val());
  });
});


























