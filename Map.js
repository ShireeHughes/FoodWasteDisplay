/*
 * Map.js --- Shiree Hughes 
 * created from Pasha's Block--http://bl.ocks.org/NPashaP/a74faf20b492ad377312 (last update: August 9, 2016)
 * updated: January 5, 2017
 *
 * Data is on child hunger in the US
 * Source: Feeding America "Map the Meal Gap"
 *	   http://www.feedingamerica.org/hunger-in-america/our-research/map-the-meal-gap/2014/map-the-meal-gap-2014-exec-summ.pdf
 * 
 *
 * REQUIRES:
 * 	http://bl.ocks.org/NPashaP/raw/a74faf20b492ad377312/3513ad985b2fa93ea35f2fc864cb30540c298171/uStates.js 
 */


/* function to create html content string in tooltip div. */
function tooltipHtml(n, d){	
	return "<h4>"+n+"</h4><table>"+
	       "<tr><td>#</td><td>"+(d.hungry)+"</td></tr>"+
	       "<tr><td>%</td><td>"+(d.percent)+"</td></tr>"+
	       "</table>";
}
	
var sampleData ={};
var stateData = [
	{hungry:67690, percent:22, color:d3.interpolate("#ffffee","#800026")(22/50)},		//HI
	{hungry:38080, percent:20.4, color:d3.interpolate("#ffffee","#800026")(20.4/50)},	//AK
	{hungry:1007870, percent:24.9, color:d3.interpolate("#ffffee","#800026")(24.9/50)},	//FL
	{hungry:253340, percent:23.4, color:d3.interpolate("#ffffee","#800026")(23.4/50)},	//SC
	{hungry:650970, percent:26.1, color:d3.interpolate("#ffffee","#800026")(26.1/50)},	//GA
	{hungry:292330, percent:26.4, color:d3.interpolate("#ffffee","#800026")(26.4/50)},	//AL
	{hungry:564240, percent:24.6, color:d3.interpolate("#ffffee","#800026")(24.6/50)},	//NC
	{hungry:357920, percent:24.0, color:d3.interpolate("#ffffee","#800026")(24.0/50)},	//TN
	{hungry:43210, percent:20.3, color:d3.interpolate("#ffffee","#800026")(20.3/50)},	//RI
	{hungry:140290, percent:18.1, color:d3.interpolate("#ffffee","#800026")(18.1/50)},	//CT
	{hungry:210050, percent:15.1, color:d3.interpolate("#ffffee","#800026")(15.1/50)},	//MA
	{hungry:60010, percent:23.3, color:d3.interpolate("#ffffee","#800026")(23.3/50)},	//ME
	{hungry:41350, percent:15.5, color:d3.interpolate("#ffffee","#800026")(15.5/50)},	//NH
	{hungry:23310, percent:19.1, color:d3.interpolate("#ffffee","#800026")(19.1/50)},	//VT
	{hungry:884170, percent:20.9, color:d3.interpolate("#ffffee","#800026")(20.9/50)},	//NY
	{hungry:338690, percent:16.8, color:d3.interpolate("#ffffee","#800026")(16.8/50)},	//NJ
	{hungry:521750, percent:19.3, color:d3.interpolate("#ffffee","#800026")(19.3/50)},	//PA
	{hungry:36380, percent:17.8, color:d3.interpolate("#ffffee","#800026")(17.8/50)},	//DE
	{hungry:247560, percent:18.3, color:d3.interpolate("#ffffee","#800026")(18.3/50)},	//MD
	{hungry:82220, percent:21.5, color:d3.interpolate("#ffffee","#800026")(21.5/50)},	//WV
	{hungry:222380, percent:21.9, color:d3.interpolate("#ffffee","#800026")(21.9/50)},	//KY
	{hungry:628580, percent:23.8, color:d3.interpolate("#ffffee","#800026")(23.8/50)},	//OH
	{hungry:437100, percent:19.7, color:d3.interpolate("#ffffee","#800026")(19.7/50)},	//MI
	{hungry:23130, percent:16.8, color:d3.interpolate("#ffffee","#800026")(16.8/50)},	//WY
	{hungry:45110, percent:20.1, color:d3.interpolate("#ffffee","#800026")(20.1/50)},	//MT
	{hungry:83110, percent:19.3, color:d3.interpolate("#ffffee","#800026")(19.3/50)},	//ID
	{hungry:337320, percent:21.0, color:d3.interpolate("#ffffee","#800026")(21.0/50)},	//WA
	{hungry:29820, percent:25.9, color:d3.interpolate("#ffffee","#800026")(25.9/50)},	//DC
	{hungry:1821820, percent:25.6, color:d3.interpolate("#ffffee","#800026")(25.6/50)},	//TX
	{hungry:2099120, percent:22.9, color:d3.interpolate("#ffffee","#800026")(22.9/50)},	//CA
	{hungry:434840, percent:26.8, color:d3.interpolate("#ffffee","#800026")(26.8/50)},	//AZ
	{hungry:161260, percent:24.3, color:d3.interpolate("#ffffee","#800026")(24.3/50)},	//NV
	{hungry:164440, percent:18.2, color:d3.interpolate("#ffffee","#800026")(18.2/50)},	//UT
	{hungry:226350, percent:18.1, color:d3.interpolate("#ffffee","#800026")(18.1/50)},	//CO
	{hungry:136070, percent:27.2, color:d3.interpolate("#ffffee","#800026")(27.2/50)},	//NM
	{hungry:210290, percent:24.5, color:d3.interpolate("#ffffee","#800026")(24.5/50)},	//OR
	{hungry:19070, percent:11.4, color:d3.interpolate("#ffffee","#800026")(11.4/50)},	//ND
	{hungry:39030, percent:18.5, color:d3.interpolate("#ffffee","#800026")(18.5/50)},	//SD
	{hungry:92230, percent:19.7, color:d3.interpolate("#ffffee","#800026")(19.7/50)},	//NE
	{hungry:129270, percent:17.8, color:d3.interpolate("#ffffee","#800026")(17.8/50)},	//IA
	{hungry:200600, percent:27.4, color:d3.interpolate("#ffffee","#800026")(27.4/50)},	//MS
	{hungry:335410, percent:21.2, color:d3.interpolate("#ffffee","#800026")(21.2/50)},	//IN
	{hungry:583000, percent:19.5, color:d3.interpolate("#ffffee","#800026")(19.5/50)},	//IL
	{hungry:195660, percent:15.2, color:d3.interpolate("#ffffee","#800026")(15.2/50)},	//MN
	{hungry:248570, percent:19.1, color:d3.interpolate("#ffffee","#800026")(19.1/50)},	//WI
	{hungry:289210, percent:20.8, color:d3.interpolate("#ffffee","#800026")(20.8/50)},	//MO
	{hungry:185660, percent:26.3, color:d3.interpolate("#ffffee","#800026")(26.3/50)},	//AR
	{hungry:226390, percent:23.8, color:d3.interpolate("#ffffee","#800026")(23.8/50)},	//OK
	{hungry:153940, percent:21.3, color:d3.interpolate("#ffffee","#800026")(21.3/50)},	//KS
	{hungry:272760, percent:24.5, color:d3.interpolate("#ffffee","#800026")(24.5/50)},	//LA
	{hungry:299050, percent:16.0, color:d3.interpolateRgb("#ffffee","#800026")(16/50)}	//VA
   ];
	
var ndx=0;

["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
 "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
 "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
 "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
 "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
	.forEach(function(d){ 			
		sampleData[d]=stateData[ndx]; 
		ndx++;
	});
	
/* draw states on id #statesvg */	
uStates.draw("#statesvg", sampleData, tooltipHtml); 
	
d3.select(self.frameElement).style("height", "600px");