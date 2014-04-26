function choropleth(year) {
	// var quantize = d3.scale.quantize()
 //    .domain([81.0, 344.8])
 //    .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));
  
  var gradient = d3.scale.linear()
    .domain([81.0, 344.8])
    .range(["white", "blue"]);

  var path = d3.geo.path();
 
  var svg = d3.select("body")
    .append("svg");

  var states = svg.append("g")
    .attr("id", "states");
   
  d3.json("/data/us-states.json", function(json) {
    
    statePaths = json.features.sort(compareByStateName);
    states.selectAll("path")
      .data(statePaths)
      .enter().append("path")
        // .attr("class", quantize) //data ? quantize : null)// useful if data changes...
      .attr("d", path)
      .attr("id", function(d) { return d.properties.NAME.trimRight(); });
    
    d3.json("/data/price_index_data.json", function(json) {
      data = json;
      states.selectAll("path")
      .data(json)
      .attr("fill", function(d) { return gradient(d[year.toString()]); });
    });
  
  });
}


function compareByStateName(a,b) {
  if (a.properties.NAME < b.properties.NAME) {
    return -1;
  } 
  if (a.properties.NAME > b.properties.NAME) {
    return 1;
  }
  return 0;
}















