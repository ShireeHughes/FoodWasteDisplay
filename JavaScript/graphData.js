/*
 * created 2017 by Shiree Hughes
 * adapted from envato tuts+ tutorial -- Building a Multi Line Chart Using D3
 *   ---> https://code.tutsplus.com/tutorials/building-a-multi-line-chart-using-d3js--cms-22935 tutorial
 *
 * updates to the original tutorial:
 *   - fixed obsolete calls from d3 v3 (code is now compatible with v4)
 *   - reconfigure to accept data from external source instead of static data
 *   - reconfigured x-axis to use time series
 */


/*
 * function to return color name for values
 * allows mapping of legends to charts
 */
function getColor(value) {
  switch(value) {
     case 0:
        return 'deepskyblue';
        break;
     case 1:
        return 'lightcoral';
        break;
     case 2:
        return 'forestgreen';
        break;
     case 3:
        return 'darkseagreen';
        break;
     case 4:
        return 'goldenrod';
        break;
     case 5:
        return 'darkorange';
        break;
     case 6:
        return 'crimson';
        break;
     case 7:
        return 'darkmagenta';
        break;
     case 8:
        return 'indigo';
        break;
     case 9:
        return 'red';
        break;
     case 10:
        return 'black';
        break;
     case 11:
        return 'darkgray';
        break;
  } 
}


/* 
 * function to create a multiline graph 
 * supports up to 12 lines (colorless)
 */
function graphDataMultiLine(max, yesterday, datasets) {
   var today = new Date();
//   var yesterday = new Date(new Date().setHours(today.getHours() - 24));
   var height = $('#visualisation').height();
   var width = $('#visualisation').width();

   // define scales, area, and axis information
   var vis = d3.select("#visualisation"),
       WIDTH = width,
       HEIGHT = height,
       MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50

       },
      xScale = d3.scaleTime().range([MARGINS.left, WIDTH - MARGINS.right]).domain([yesterday, today]),
      yScale = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,max]),
      xAxis = d3.axisBottom(xScale),  
      yAxis = d3.axisLeft(yScale);

   //Append x-axis to the graph
   vis.append("svg:g")
      .attr("class","axis") //allows us to manipulate the CSS
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")  //positions axis
      .call(xAxis);

   //Append y-axis to the graph
   vis.append("svg:g")
      .attr("class","axis") //allows us to manipulate the CSS
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#fff")
      .text("Waste, lbs");

   //create line
   var lineGen = d3.line()
      .x(function(d) {
          return xScale(d.x);
       })
      .y(function(d) {
          return yScale(d.y);
      })
      .curve(d3.curveBasis);    //interpolation to smooth the line

    //add datasets
    var ndx;
    for(ndx = 0; ndx < datasets.length; ndx++) {
        vis.append('svg:path')
           .attr('d', lineGen(datasets[ndx]))
           .attr('stroke', getColor(ndx))
           .attr('stroke-width', 2)
           .attr('fill', 'none');
    }
  }
