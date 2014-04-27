// function choropleth() {
//   var width = 960,
//       height = 600;

//   var rateByState = d3.map();

//   var quantize = d3.scale.quantize()
//       .domain([81.0, 344.8])
//       .range(["white", "blue"]);

//   var projection = d3.geo.albersUsa()
//       .scale(1280)
//       .translate([width / 2, height / 2]);

//   var path = d3.geo.path()
//       .projection(projection);

//   var svg = d3.select("body").append("svg")
//       .attr("width", width)
//       .attr("height", height);

//   console.log('before queue');
//   queue()
//       .defer(d3.json, "/data/states.json")
//       .defer(d3.json, "/data/price_index_data.json")
//       .await(ready);

//   console.log("rateByState: " + rateByState);

//   function ready(error, states, price_index_data) {
//     console.log('in ready');
//     console.log(states.features.sort(compareByStateName));
//     svg.append("g")
//         .attr("class", "states")
//       .selectAll("path")
//         .data(states.features.sort(compareByStateName))
//       .enter().append("path")
//         .attr("d", path);
//     svg.append("g")
//         .attr("class", "states")
//       .selectAll("path")
//         .data(price_index_data)
//         .attr("fill", function(d) { return gradient(d["1991"]); });
//   }

//   d3.select(self.frameElement).style("height", height + "px");

//   function compareByStateName(a,b) {
//       if (a.properties.NAME < b.properties.NAME) {
//         return -1;
//       } 
//       if (a.properties.NAME > b.properties.NAME) {
//         return 1;
//       }
//       return 0;
//   }


// }








function Choropleth(year) {
  year = typeof year !== 'undefined' ?  year : "1991";
  var choro = this;
	// var quantize = d3.scale.quantize()
 //    .domain([81.0, 344.8])
 //    .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));
  
  this.gradient = d3.scale.linear()
    .domain([81.0, 344.8])
    .range(["white", "blue"]);

  var path = d3.geo.path();
 
  var svg = d3.select("body")
    .append("svg");

  this.states = svg.append("g")
    .attr("class", "states");
   
  d3.json("/data/states.json", function(json) {
    
    statePaths = json.features.sort(compareByStateName);
    choro.states.selectAll("path")
      .data(statePaths)
      .enter().append("path")
        // .attr("class", quantize) //data ? quantize : null)// useful if data changes...
      .attr("d", path)
      .attr("id", function(d) { return d.properties.NAME.trimRight(); });
    
    d3.json("/data/price_index_data.json", function(json) {
      data = json;
      choro.states.selectAll("path")
      .data(json)
      .attr("fill", function(d) { return choro.gradient(d[year.toString()]); });
    });
  
  });
}
Choropleth.prototype.colorStates = function(year) {
  var choro = this;
  console.log(choro);
  d3.json("/data/price_index_data.json", function(json) {
    data = json;
    choro.states.selectAll("path")
    .data(json)
    .attr("fill", function(d) { return choro.gradient(d[year]); });
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















