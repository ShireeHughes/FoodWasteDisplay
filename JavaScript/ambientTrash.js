function graphComic(totalWase) {
    var numBags = totalWaste / 20;
    if (totalWaste == 0) {
        $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene.png?raw=true' alt='hi' class='inline'/>");
        return;
    }
    switch (numBags) {
        case 0:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_00.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 1:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_01.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 2:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_02.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 3:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_03.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 4:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_04.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 5:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_05.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 6:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_06.png?raw=true' alt='hi' class='inline'/>");
            break;

    }
}
