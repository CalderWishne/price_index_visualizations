// var data;
// var statePaths;

$(function() {
  var choropleth = new Choropleth();

  $('#year').on('change', function(event) {
  	event.preventDefault();
  	var yearString = $(this).val();
  	$.post('/indices/min_max', {year: yearString}, function(data){
  		choropleth.colorStates(yearString, parseFloat(data[0]), parseFloat(data[1]));
  	});  	
  });
});


























