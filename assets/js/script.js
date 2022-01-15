// links to HTML
var currentTimeEl = $("#currentDay");

//variables
var hours = 18;

//sets text of currentTimeEl to current day
currentTimeEl.text(moment().format("dddd, MMMM Do"));

//creates card container and appends div and h4
var createCard = function(text){
    var cardContainer = $("#time-blocks");
    cardContainer.append("<div class='card'><h4 class='card-header d-flex align-items-center'>" + text + "</h4></div>");
}

//adds AM or PM to time and changes zero to 12
var formatTime = function(time){
    let suffix;
    if (time < 12){
        suffix = "AM"
    } else { 
        suffix = "PM";
    }
    // sets modulus to 12 so it goes up to 12
    var modTime = time % 12;
    if (modTime === 0){
        modTime = 12;
    }
    return modTime + suffix;
}

//loops through format time and create card
var timeBlocks = function(){
    for(let i=9; i < hours; i++){
        createCard(formatTime(i));
    }
}

//calls time block
timeBlocks();