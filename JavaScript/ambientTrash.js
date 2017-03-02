function graphComic(totalWaste) {
    var numBags = Math.floor(totalWaste / 20);

    if (totalWaste == 0) {
        $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/cb0b2ad2363992264cc67f8813261a828bc5bfb3/Images/beach_scene.png?raw=true' alt='hi' class='inline'/>");
        return;
    }

    var imageName = "https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_";
    if(numBags == 0) {
       imageName += "00.png";
    } else if(numBags < 10) {
       imageName += "0" + numBags + ".png";
    } else {
       imageName += numBags + ".png";
    }    

    $(".comic").html("<img src='" + imageName + "?raw=true' alt='hi' class='inline'/>");

}

function drawSlices(numSlices) {
           var pies = Math.floor(numSlices/8);
	   var slices = numSlices - (8*pies);
	   var bottom,one,two,three,top,bottom2,one2,two2,three2,top2;

 	   if(pies <= 17) { bottom = pies; } 
 	   else {bottom = 17;}

 	   if(pies > 17 && pies <= 42) { one = pies-17; } 
 	   else if(pies > 42) {one = 25; }
	   else {one = 0;}


 	   if(pies > 42 && pies <= 67) { two = pies-(17+25); } 
 	   else if(pies > 67) {two = 25;}
	   else {two = 0;}

 	   if(pies > 67 && pies <= 92) { three = pies-(17+25+25); } 
 	   else if(pies > 92) {three = 25;}
	   else {three = 0;}
	   if(pies > 92 && pies <= 109) { bottom2 = pies-(17+25+25+25); } 
 	   else if(pies > 109) {bottom2 = 17;}
	   else {bottom2 = 0;}

	   if(pies > 109 && pies <= 134) { one2 = pies-(17+25+25+25+17); } 
 	   else if(pies > 134) {one2 = 25;}
	   else {one2 = 0;}

	   if(pies > 134 && pies <= 159) { two2 = pies-(17+25+25+25+17+25); } 
 	   else if(pies > 159) {two2 = 25;}
	   else {two2 = 0;}

	   if(pies > 159 && pies <= 184) { three2 = pies-(17+25+25+25+17+25+25); } 
 	   else if(pies > 184) {three2 = 25;}
	   else {three2 = 0;}

	   if(pies > 184 && pies <= 209) { four2 = pies-(17+25+25+25+17+25+25+25); } 
 	   else if(pies > 209) {four2 = 25;}
	   else {four2 = 0;}

	   if(pies > 234 && pies <= 259) { top2 = pies-(17+25+25+25+17+25+25+25+25); } 
 	   else if(pies > 259) {top2 = 25;}
	   else {top2 = 0;}

	
	   //write total
	   $(".total-slices").html("<center>" + numSlices + " slices<br />" + "or<br />" + numSlices/8 + " Pizzas</center>");
	   //set main image
           var commitPath = "7abd8bfbd4877882f6aca47d839ebfbd92365b85";//"e52c7a3a37377c33cf10f93c53253a6c1ff48ce2";
	   var imgName = "table-"+slices;
           var bottomName = "side-"+bottom;
           var innerHTML;

           $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/" + imgName + ".png?raw=true' alt='hi' class='inline'/>");
	   //set side images
           $("#bottom").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/side-" + bottom + ".png?raw=true' alt='hi' class='inline'/>");

	   if(one > 0) {
	       innerHTML = $(".inner-table").html();
	       if(innerHTML.indexOf("one") == -1) {
	               $(".inner-table").html("<li class='pizza-table' id='one'></li>"+ innerHTML);
		}
               $("#one").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + one + ".png?raw=true' alt='hi' class='inline'/>");
	   }

	   if(two > 0) {
	       innerHTML = $(".inner-table").html();
	       if(innerHTML.indexOf("two") == -1) {
	               $(".inner-table").html("<li class='pizza-table' id='two'></li>"+ innerHTML);
		}
           $("#two").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + two + ".png?raw=true' alt='hi' class='inline'/>");
	   }

           if(three > 0) {
	       innerHTML = $(".inner-table").html();
	       if(innerHTML.indexOf("three") == -1) {
	               $(".inner-table").html("<li class='pizza-table' id='three'></li>"+ innerHTML);
		}
           $("#three").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + three + ".png?raw=true' alt='hi' class='inline'/>");
	        $(".pizza-table img").css("width","225px");
		$(".pizza-table img").css("height", "225px");
           }

	   outerHTML = $(".outer-table").html();
           if(bottom2 > 0) {
	       if(outerHTML.indexOf("second") == -1) {
		   $(".outer-table").html(outerHTML.substring(0,outerHTML.indexOf("</ul>")+5)+"<ul id='second' class='inner-table'></ul>" + outerHTML.substring(outerHTML.indexOf("</ul>")+5,outerHTML.length));
	       }
	       innerHTML = $("#second.inner-table").html();
	       if(innerHTML.indexOf("bottom-2") == -1) {
	               $("#second.inner-table").html("<li class='pizza-table' id='bottom-2'></li>"+ innerHTML);
		}
	   $("#bottom-2").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/side-" + bottom2 + ".png?raw=true' alt='hi' class='inline'/>");
           }

           if(one2 > 0) {
	       innerHTML = $("#second.inner-table").html();
	       if(innerHTML.indexOf("one-2") == -1) {
	               $("#second.inner-table").html("<li class='pizza-table' id='one-2'></li>"+ innerHTML);
		}
           $("#one-2").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + one2 + ".png?raw=true' alt='hi' class='inline'/>");
           }

           if(two2 > 0) {
	       innerHTML = $("#second.inner-table").html();
	       if(innerHTML.indexOf("two-2") == -1) {
	               $("#second.inner-table").html("<li class='pizza-table' id='two-2'></li>"+ innerHTML);
		}
           $("#two-2").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + two2 + ".png?raw=true' alt='hi' class='inline'/>");
	   }

           if(three2 > 0) {
	       innerHTML = $("#second.inner-table").html();
	       if(innerHTML.indexOf("three-2") == -1) {
	               $("#second.inner-table").html("<li class='pizza-table' id='three-2'></li>"+ innerHTML);
		}
           $("#three-2").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + three2 + ".png?raw=true' alt='hi' class='inline'/>");
           }

           if(four2 > 0) {
	       innerHTML = $("#second.inner-table").html();
	       if(innerHTML.indexOf("four-2") == -1) {
	               $("#second.inner-table").html("<li class='pizza-table' id='one-2'></li>"+ innerHTML);
		}
           $("#four-2").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + four2 + ".png?raw=true' alt='hi' class='inline'/>");
           }
           $("#top").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + top + ".png?raw=true' alt='hi' class='inline'/>");
           $("#top-2").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/" + commitPath + "/Images/Panel-" + top2 + ".png?raw=true' alt='hi' class='inline'/>");

           if(pies > 67) {	        $(".pizza-table img").css("width","225px");
		$(".pizza-table img").css("height", "225px");
	   }
	}
