$(function() {

  var choropleth = new Choropleth();
  // var line_chart = new LineChart();

  $('#modal_line_chart').easyModal({
    overlay: 0.2,
  });


  $('select').on('change', function(event) {
  	event.preventDefault();
  	var yearString = $('#year').val();
  	var low_color = $('#low_color').val();
  	var high_color = $('#high_color').val();
  	$.post('/indices/min_max', {year: yearString}, function(data){
  		choropleth.colorStates(yearString, parseFloat(data[0]), parseFloat(data[1]), low_color, high_color);
  	});	
  });

  $('.states').on('click', 'path', function(event) {
    event.preventDefault();
    $('#modal_line_chart').trigger('openModal');
    var stateName = $(this).attr('id');
    console.log(stateName);
  	$.post('/state_records', {state: stateName}, function(data) {
      console.log(data);
    });
  }); 
  // new LineChart("state");
});


























