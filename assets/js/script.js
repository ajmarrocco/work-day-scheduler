// links to HTML
var currentTimeEl = $("#currentDay");

//variables
var hours = 18;

//sets text of currentTimeEl to current day
currentTimeEl.text(moment().format("dddd, MMMM Do"));

//colors the time blocks
var colorBlocks = function(timeAndDay, index){
    // gets current time and sets as value
    var currentHourEl = moment().format();
    // formats timeAndDay to include the day as well
    timeAndDay = moment(timeAndDay, "hA").format();
    
    // compares hours  
    if (moment(currentHourEl, 'YYYY-MM-D, hA').isBefore(timeAndDay)){
        //if current time is before the timeAndDay variable then give id for the index the class future
        $("#hour"+ index).addClass("future");
    } else if (moment(currentHourEl, 'YYYY-MM-D, hA').isAfter(timeAndDay)){
        //if current time is after the timeAndDay variable then give id for the index the class past
        $("#hour"+ index).addClass("past");
    } else{
        //if neither then give id for the index the class present
        $("#hour"+ index).addClass("present");
    }
}

//creates card container and appends div and h4
var createCard = function(text, index){
    var cardContainer = $("#time-blocks");
    cardContainer.append("<div class='card'><h4 id='hour"+ index +"' class='card-header d-flex align-items-center'>" + text + "</h4></div>");
}

//adds AM or PM to time and changes zero to 12
var formatTime = function(time){
    //sets time from 9 to 18 with AM/PM so it continues 13 would become 1PM and so on.
    var modTime = moment(time, "h").format("hA");
    //returns modTime;
    return modTime;
}

//loops through format time and create card
var timeBlocks = function(){
    for(let i=9; i < hours; i++){
        createCard(formatTime(i), i);
        colorBlocks(formatTime(i), i);
    }
}

//calls time block
timeBlocks();