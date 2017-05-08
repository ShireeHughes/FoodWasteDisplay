/*
 * BarGraph(Object config)
 *
 * Config input:
 *  data - array of objects containing elements x and y
 *  elementID - string identifying HTML element to place graph 
 *              (includes '.' or '#' if class or id)
 *  graphType - 0: x-axis uses categories (ie: Summer, Spring, Fall and Winter)
 *              1: x-axis uses time series
 *  yLabel - units for y-axis
 *  color - color of bar graph [optional]
 *
 * Output:
 *  bar graph
 */
function BarGraph(config) {
    //set up configurations
    var data = config.data;
    var elementID = config.elementID;
    var graphType = config.graphType;
    var yLabel = config.yLabel;
    var color;

    if(typeof config.color != "undefined") {
        color = config.color;
    } else {
        color = "steelblue";
    }
    
    
    //For calculating coordinates
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

    //Format x axis
    var x = d3.scaleBand()
              .domain([d3.range(0,data.length)])
              .range([0, width])
              .round(true)
              .padding(.1);
    var xAxis;
    
    if(graphType == 0) {
        //categories
        xAxis = d3.axisBottom(x);
    } else {
        //time series
        xAxis = d3.axisBottom(x)
        .tickFormat(d3.timeFormat("%m/%d"));
    }

    
    //format y axis
    var y = d3.scaleLinear().range([height, 0]);
    var yAxis = d3.axisLeft(y)
                  .ticks(10);
    
    
    //Start creating graph
    var svg = d3.select(elementID).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    x.domain(data.map(function(d) { return d.x; }));
    y.domain([0, d3.max(data, function(d) { return d.y; })]);
    
    //x axis text & data
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "middle")
    .attr("dy", ".55em")
    
    //y axis text & data
    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "end")
    .text(yLabel);
    
    //rectangles for bar graph
    svg.selectAll("bar")
    .data(data)
    .enter().append("rect")
    .style("fill", color)
    .attr("x", function(d) { return x(d.x); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.y); })
    .attr("height", function(d) { return height - y(d.y); });
}


/*
 * MultiBarGraph(Object config)
 *
 * Config input:
 *  data - array of objects containing elements x + multiple categories
 *  elementID - string identifying HTML element to place graph
 *              (includes '.' or '#' if class or id)
 *  graphType - 0: x-axis uses categories (ie: Summer, Spring, Fall and Winter)
 *              1: x-axis uses time series
 *  yLabel - units for y-axis
 *  color - array of colors for bar graph [optional]
 *
 * Output:
 *  bar graph with multiple categories per x object
 */
function MultiBarGraph(config) {
    //set up configurations
    var data = config.data;
    var elementID = config.elementID;
    var graphType = config.graphType;
    var yLabel = config.yLabel;
    var color;
    if(typeof config.color != "undefined") {
        color = config.color;
    } else {
        color = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
    }
    
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = $(elementID).attr("width") - margin.left - margin.right,
    height = $(elementID).attr("height") - margin.top - margin.bottom;

    var svg = d3.select(elementID).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom),
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);
    
    var x1 = d3.scaleBand()
    .padding(0.05);
    
    var y = d3.scaleLinear()
    .range([height, 0]);
    
    var z = d3.scaleOrdinal()
    .range(color);
    
    var keys = [];
    for (var key in data[0]) {
        if(key != "x")
            keys.push(key);
    }
    
    var xAxis;
    if(graphType == 0) {
        //categories
        xAxis = d3.axisBottom(x0);
    } else {
        //time series
        xAxis = d3.axisBottom(x0)
        .tickFormat(d3.timeFormat("%m/%d"));
    }
    
    
    x0.domain(data.map(function(d) { return d.x; }));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); })]).nice();
           
    g.append("g")
     .selectAll("g")
     .data(data)
     .enter().append("g")
     .attr("transform", function(d) { return "translate(" + x0(d.x) + ",0)"; })
     .selectAll("rect")
     .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
     .enter().append("rect")
     .attr("x", function(d) { return x1(d.key); })
     .attr("y", function(d) { return y(d.value); })
     .attr("width", x1.bandwidth())
     .attr("height", function(d) { return height - y(d.value); })
     .attr("fill", function(d) { return z(d.key); });
           
    g.append("g")
     .attr("class", "axis")
     .attr("transform", "translate(0," + height + ")")
     .call(xAxis);
    
     g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y))//.ticks(null, "s")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "end")
      .text(yLabel);

    var legend = g.append("g")
           .attr("font-family", "sans-serif")
           .attr("font-size", 10)
           .attr("text-anchor", "middle")
           .selectAll("g")
           .data(keys.slice().reverse())
           .enter().append("g")
           .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
           
    legend.append("rect")
           .attr("x", width - 19)
           .attr("width", 19)
           .attr("height", 19)
           .attr("fill", z);
           
    legend.append("text")
           .attr("x", width - 24)
           .attr("y", 9.5)
           .attr("dy", "0.32em")
           .text(function(d) { return d; });    
}