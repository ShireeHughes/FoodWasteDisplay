//create data sets
var data = [],
data2 = [],
data3 = [],
data4 = [];
var cafe1Total = 0;
var cafe2Total = 0;
var totalWaste = 0;
var displayNo;
var skipWeek;

//function for creating a timestamp in D3
//var parseTime = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
var parseTime = d3.timeParse("%b %d, %Y %I:%M:%S %p");

//call to retrieve data from MongoDB
retrieveData();
imagery(totalWaste);


function setFlags(disNo, flag) {
    displayNo = disNo;
    skipWeek = flag;
}
/*
 * Function to return max value
 * between value a and value b
 */
function findMax(a,b) {
    if(a < b) { return b; }
    else {
        return a;
    }
}

/*
 * Function called in jsonp callback
 * this function parses the incoming JSON
 * and creates two datasets: one for cafe1
 * and one for cafe2
 * samples for each trash can are used to
 * create cumulative data points
 *
 */
function getData(result) {
    var ndx;
    var max = 0;
    var max2=0; var last2 =0;
    var max1=0; var last1 =0;
    
    if(result.length > 0 && result.length <= 7) {
        var wmax = 0;
        var wmin = 1000;
        
        for(i=0; i<result.length; i++) {
            if(result[i].total < wmin && result[i].total != 0) {
                wmin = result[i].total;
            }
            
            if(result[i].total > wmax) {
                wmax = result[i].total;
            }
        }
        var todaysTotal = cafe1Total + cafe2Total;
        
        loadLiquidFillGauge("fillgauge1", todaysTotal/wmax*100, config1);
        loadLiquidFillGauge("fillgauge2", todaysTotal/wmin*100, config1);
        
    } else {
        cafe2Total = 0;
        cafe1Total = 0;
        
        //place samples in the correct dataset
        for (ndx = 0; ndx < result.length; ndx++) {
            var current = result[ndx];
            //add to cafe 1 dataset
            if (current.trash_can_id == "cafe_1") {
                if (new Date(current.timestamp).getHours() >= 6) {
                    
                    if (cafe1Total == 0) {
                        cafe1Total = current.weight;
                        max1 = current.weight;
                    } else {
                        if (last1 - current.weight > 5 || current.weight < .05) {
//                            if(current.weight < 1) {
                                max1 = current.weight;
                                cafe1Total = cafe1Total + current.weight;
 //                           }
                        } else {
                            if (max1 < current.weight) {
                                cafe1Total = cafe1Total - max1 + current.weight;
                                max1 = current.weight;
                            }
                        }
                    }
                    last1 = current.weight;
                    data.push({
                              "x": parseTime(current.timestamp),
                              "y": current.weight
                              });
                    data3.push({
                               "x": parseTime(current.timestamp),
                               "y": cafe1Total //current.total
                               });
                }
            }
            
            //add to cafe 2 dataset
            if(current.trash_can_id == "cafe_2") {
                if(new Date(current.timestamp).getHours() >= 6) {
                    if(cafe2Total == 0) {
                        max2 = current.weight;
                        cafe2Total = current.weight;
                    }
                    else {
                        if(last2 - current.weight > 5 || current.weight < .05) {
                            max2 = current.weight;
                            cafe2Total = cafe2Total + current.weight;
                        } else {
                            if(max2 < current.weight) {
                                cafe2Total = cafe2Total - max2 + current.weight;
                                max2 = current.weight;
                            }
                        }
                    }
                    last2 = current.weight;
                    data2.push({
                               "x":parseTime(current.timestamp),
                               "y":current.weight
                               });
                    data4.push({
                               "x":parseTime(current.timestamp),
                               "y":cafe2Total//current.total
                               });
                }
            }
            //save max
            if( max < cafe1Total || max < cafe2Total ) {
                max = findMax(cafe1Total, cafe2Total);
            }
        }
        if(max == 0) {max = 5;}
        console.log("caf1 = " +cafe1Total);
        console.log("caf2 = "+cafe2Total);
        
        totalWaste = cafe2Total+cafe1Total;
        console.log(totalWaste);
        
        var start;
        
        if(data.length > 0) {
            if(data[0].x < data2[0].x) { start = data[0].x; end = data[data.length-1].x; }
	            else { start = data2[0].x; end = data2[data2.length-1].x; }
        } else {
            start = new Date(2017,2,20);
	    end = new Date();
        }
        
        //graph everything
        d3.selectAll(".graph svg > *").remove(); 		//remove old graphs
	
        graphDataMultiLine(max, start, end, [data3, data4]);	//graph line graph of total waste
        //graph fil gauges
        if(skipWeek) {
            getWeek("03-03-2017");
        } else {
            dateToDisplay = (start.getMonth()+1)+"-"+start.getDate()+"-"+start.getFullYear();
            getWeek(dateToDisplay);
        }
        
        imagery(totalWaste);				//display proper number of trash bags
        
        //set timer to update everything 1 minute from now
        setTimeout(retrieveData, 60000);
        
        //reset data arrays
        data = []
        data2 = [];
        data3 = [];
        data4 = [];
    }
}

function imagery(totalWaste) {
    switch(displayNo) {
        case 1:
            graphComic(totalWaste);
            break;
        case 2:
            drawSlices(totalWaste);
            break;
    }
}

function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
    "<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
    "<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
    "<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
    "</table>";
}
