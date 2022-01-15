// links to HTML
var currentTimeEl = $("#currentDay");

//variables
var hours = 18;

//sets text of currentTimeEl to current day
currentTimeEl.text(moment().format("dddd, MMMM Do"));


var colorBlocks = function(time){
    var currentHourEl = moment().format("hA");
    console.log(currentHourEl);
    console.log(moment(currentHourEl).isAfter(time));
    console.log(moment(currentHourEl).isBefore(time));
    console.log(time);

    console.log(moment('5PM').isAfter('4PM', 'hour'));

    console.log(moment('2010-10-20').isAfter('2010-10-19'));


    if (moment('currentHourEl','h:mma').isAfter('time','h:mma')){
        $("h4").addClass("future");
    } else if (moment('currentHourEl','h:mma').isBefore('time','h:mma')){
        $("h4").addClass("past");
    } else{
        $("h4").addClass("present");
    }
    // if (currentHourEl > time){
    //     $(".card-header").addClass("future");
    // } else if (currentHourEl < time){
    //     $(".card-header").addClass("past");
    // } else{
    //     $(".card-header").addClass("present");
    // }
}

//creates card container and appends div and h4
var createCard = function(text){
    var cardContainer = $("#time-blocks");
    cardContainer.append("<div class='card'><h4 class='card-header d-flex align-items-center'>" + text + "</h4></div>");
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
        createCard(formatTime(i));
        colorBlocks(formatTime(i));
    }
}

//calls time block
timeBlocks();