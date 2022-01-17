// links to HTML
var currentTimeEl = $("#currentDay");

//variables
var hours = 18;

//sets text of currentTimeEl to current day
currentTimeEl.text(moment().format("dddd, MMMM Do"));

//saves tasks to local storage
var saveTasks = function(index, labelEl, inputEl) {
    $("#div" + index).on("click", "button", function(){
        localStorage.setItem(labelEl.text(), inputEl.val());
    })
};

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//         tasks = {
//             toDo: [],
//             inProgress: [],
//             inReview: [],
//             done: []
//         };
//     }
// };

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

//creates card container
var createCard = function(text, index){
    var cardContainerEl = $("#time-blocks");
    //sets var for label and adds text and class and div based on index
    var divEl = $("<div>")
        .addClass("card")
        .attr('id', 'div' + index);
    var labelEl = $("<label>")
        .text(text)
        .addClass("col-1 d-inline-flex");
    //sets var for input and adds text and class
    var inputEl = $("<input>")
        .attr('id', 'hour' + index)
        .addClass("col-10 d-inline-flex");
    //sets var for button and class
    var buttonEl = $("<button>")
        .addClass("col-1")
        .attr('id', 'btn' + index);
    //adds icon to span
    var spanEl = $("<span>")
        .addClass("oi oi-lock-locked")
    //appends div and input, label, button to cardContainer
    cardContainerEl.append(divEl);
    $(divEl).append(labelEl,inputEl,buttonEl);

    //appends span to button
    buttonEl.append(spanEl);

    //call saveTasks with index, labelEl and inputEl as parameters
    saveTasks(index, labelEl, inputEl);
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