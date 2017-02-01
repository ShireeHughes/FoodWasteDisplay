function graphComic(totalWaste) {
    var numBags = Math.floor(totalWaste / 20);
    console.log(numBags);
console.log($(".comic"));
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
        case 7:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_07.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 8:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_08.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 9:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_09.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 10:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_10.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 11:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_11.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 12:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_12.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 13:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_13.png?raw=true' alt='hi' class='inline'/>");
            break;
	case 14:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_14.png?raw=true' alt='hi' class='inline'/>");
            break;
        case 15:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_15.png?raw=true' alt='hi' class='inline'/>");
            break;
        default:
            $(".comic").html("<img src='https://github.com/ShireeHughes/FoodWasteDisplay/blob/server-side-calculations/Images/beach_scene_15.png?raw=true' alt='hi' class='inline'/>");
            break;

    }
}
