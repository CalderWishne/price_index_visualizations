$(function() {
  var choropleth = new Choropleth();

  $('select').on('change', function(event) {
  	event.preventDefault();
  	var yearString = $('#year').val();
  	var color = $('#color').val();
  	$.post('/indices/min_max', {year: yearString}, function(data){
  		choropleth.colorStates(yearString, parseFloat(data[0]), parseFloat(data[1]), color);
  	});	
  });

  $('.states').on('click', 'path', function() {
  		alert($(this).attr('id'));
  	}); 
});


























