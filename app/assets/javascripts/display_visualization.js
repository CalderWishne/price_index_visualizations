$(function() {

  var choropleth = new Choropleth();
  var lineChart;

  var $loading = $('#loading_div').hide();

  $(document)
    .ajaxStart(function () {
      $loading.show();
    })
    .ajaxStop(function () {
      $loading.hide();
    });

  $('#modal_line_chart').easyModal({
    overlay: 0.2,
    top: 0
  });

  $('#modal_line_chart').css('left', 0);//Don't know why I have to do this, but nothing else would move the damn thing!


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
    $('#modal_line_chart').empty();
    event.preventDefault();
    var stateName = $(this).attr('id');
    console.log(stateName);
  	$.post('/state_records', {state: stateName}, function(data) {
      if (typeof lineChart == 'undefined') {
        linechart = new LineChart(data);
      } else {
        lineChart.data = data;
      }
    });
    $('#modal_line_chart').trigger('openModal');
  }); 
  // new LineChart("state");
});


























