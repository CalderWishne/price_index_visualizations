function LineChart(data) {
  this.data = data;
  var state = this.data.state;
  var indices = this.data.indices;

  console.log('in on_plot_page_load');
  /*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
  nv.addGraph(function() {
    var chart = nv.models.lineChart()
                  .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                  .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                  .transitionDuration(350)  //how fast do you want the lines to transition?
                  .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                  .showYAxis(true)        //Show the y-axis
                  .showXAxis(true)        //Show the x-axis
    ;

    chart.xAxis     //Chart x-axis settings
        .axisLabel('Year');

    chart.yAxis     //Chart y-axis settings
        .axisLabel('Index (percent of previous fourth quarter)');

    /* Done setting the chart up? Time to render it!*/
    var myData = indexData();  
    console.log(indexData()); //You need data...

    var svg = d3.select('#modal_line_chart').append('svg')//Creates svg to hold the chart.
      .attr('id', 'chart')
      .attr('height', 450)
      .attr('width', 900);

    svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "white");

    d3.select('svg#chart')    //Select the <svg> element you want to render the chart in.   
        .datum(myData)         //Populate the <svg> element with chart data...
        .call(chart);          //Finally, render the chart!

    //Update the chart when window resizes.
    nv.utils.windowResize(function() { chart.update() });
    return chart;
  });
  /**************************************
   * Simple test data generator
   */
    
   function indexData() {
    //Line chart data should be sent as an array of series objects.
      return [{
        values: formatIndexData(indices),      //values - represents the array of {x,y} data points
        key: 'Index for ' + state, //key  - the name of the series.
        color: 'red'  //color - optional: choose your own line color.
      }];
    }
  }


function formatIndexData(indexData) {
  return indexData.map(function(indexObj){
    return {x: parseInt(indexObj.year), y: parseFloat(indexObj.index)};
  });
}

//Bostock D3 chart example:
  // console.log(state);
  // console.log(indices);

  // var margin = {top: 20, right: 20, bottom: 30, left: 50},
  //     width = 960 - margin.left - margin.right,
  //     height = 500 - margin.top - margin.bottom;

  // var height = 450;
  // var width = 900;

  // var x = d3.scale.linear()
  //     .range([0, width]);

  // var y = d3.scale.linear()
  //     .range([height, 0]);

  // var xAxis = d3.svg.axis()
  //     .scale(x)
  //     .orient("bottom");

  // var yAxis = d3.svg.axis()
  //     .scale(y)
  //     .orient("left");

  // var line = d3.svg.line()
  //     .x(function(d) { console.log("year: "+parseInt(d.year)); return x(parseInt(d.year)); })
  //     .y(function(d) { console.log("index: "+parseFloat(d.index));return y(parseFloat(d.index)); });

  // var svg = d3.select("div#modal_line_chart").append("svg")
  //     .attr("width", width)
  //     .attr("height", height);

  // // d3.json("data.tsv", function(error, data) {
  // //   data.forEach(function(d) {
  // //     d.date = parseDate(d.date);
  // //     d.close = +d.close;
  // //   });

  //   x.domain(d3.extent(indices, function(d) {console.log("x(year): "+parseInt(d.year)); return x(parseInt(d.year)); }));
  //   y.domain(d3.extent(indices, function(d) {console.log("y(index): "+parseFloat(d.index));return y(parseFloat(d.index)); }));

  //   // svg.append("g")
  //   //     .attr("class", "x axis")
  //   //     .attr("transform", "translate(0," + height + ")")
  //   //     .call(xAxis);

  //   // svg.append("g")
  //   //     .attr("class", "y axis")
  //   //     .call(yAxis)
  //   //   .append("text")
  //   //     .attr("transform", "rotate(-90)")
  //   //     .attr("y", 6)
  //   //     .attr("dy", ".71em")
  //   //     .style("text-anchor", "end")
  //   //     .text("Index");

  //   svg.append("path")
  //       .datum(indices)
  //       .attr("class", "line")
  //       .attr("d", line);
 