// links to HTML
var currentTimeEl = $("#currentDay");

//variables
var hours = 18;

//sets text of currentTimeEl to current day
currentTimeEl.text(moment().format("dddd, MMMM Do"));


var colorBlocks = function(timeAndDay, index){
    // var currentHourEl = moment().format("YYYY-MM-D, hA");
    var currentHourEl = moment().format();
    // console.log(currentHourEl);
    timeAndDay = moment(timeAndDay, "hA").format();
    // console.log(timeAndDay);

    // timeAndDay = moment(timeAndDay, "hA").format("YYYY-MM-D, hA");
    // console.log(timeAndDay);

    // console.log(moment('5PM').isAfter('4PM', 'hour'));

    // console.log(moment('2010-10-20').isAfter('2010-10-19'));
    console.log(timeAndDay);
    
    console.log(moment(currentHourEl, 'YYYY-MM-D, hA').isAfter(timeAndDay));
    console.log(moment(currentHourEl, 'YYYY-MM-D, hA').isBefore(timeAndDay));  
    // var after = moment(currentHourEl, 'YYYY-MM-D, hA').isAfter(timeAndDay); 
    // var before = moment(currentHourEl, 'YYYY-MM-D, hA').isAfter(timeAndDay);    

    if (moment(currentHourEl, 'YYYY-MM-D, hA').isBefore(timeAndDay)){
        console.log(moment(currentHourEl, 'YYYY-MM-D, hA').isBefore(timeAndDay)); 
        $("#hour"+ index).addClass("future");
    } else if (moment(currentHourEl, 'YYYY-MM-D, hA').isAfter(timeAndDay)){
        $("#hour"+ index).addClass("past");
    } else{
        $("#hour"+ index).addClass("present");
    }
}

//creates card container and appends div and h4
var createCard = function(text, index){
    console.log(text);
    console.log(index);
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