// $(document).ready(function() {
// //   var present = dayjs.tz(dateValue);
// //   var currentTime = (present.format('dddd, MMMM D YYYY, h:mm:ss a'))
// // $("#currentDay").text(present);
// var currentDay = $("#currentDay");
// var present = dayjs().format("dddd, MMMM D YYYY, HH:mm a");

// currentDay.text(present);

// var presentHour = dayjs().format("HHmm");
// // var roundHour = "13:00";
// console.log(presentHour);
// var hourText = $(".hour-text");

// var timeBlock = $(".time-block");
// console.log(timeBlock.length);
// // var label = $("<label>");
// var clock;
// var clock = Math.round(timeBlock[i]);
// var i = 0;
//   // do stuff when DOM is ready
// function status(){
// for (var i=0; 0 < timeBlock.length; i++) {
//   // var clock = Math.round(timeBlock[i]);
// console.log(clock);
// console.log(timeBlock[i]);
//   if (presentHour > clock) {
//   timeBlock.addClass("past");
// } else if (presentHour === clock) {
//   timeBlock.addClass("present");
// } else if (presentHour < clock) {
//   timeBlock.addClass("future");
// } return;
// }};
// status();

// dayjs().format();
var present = dayjs().format("dddd, MMMM D YYYY, HH:mm a");
var currentDay = $("#currentDay");
currentDay.text(present);

var saveBtn = $(".saveBtn");
var task = $(".task").value;

$(document).ready(function() {
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function renderSavedTask() {
  var task = localStorage.getItem("task");
}

saveBtn.on("click", function saveData() {
  localStorage.setItem("task", task);
console.log(task);
  renderSavedTask();

  
  })


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

// addEventListener to saveBtn, to target time-block by using this syntax
// to identify time-block container and save text data to local storage.

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
//DRAFT LOGIC for color application according to time: - make variables
// if (dayjs(past).isBefore(present)) {
//   then addClass to Element, linked to
//   <bg-color> of "time-block" is grey;
// } else if (dayjs(present)) {
//   then addClass to Element, linked to
//   <bg-color> of "time-block" is red or orange;
// } else if (dayjs(future).isAfter(present))
//  then addClass to Element, linked to
//  <bg-color> of "time-block" is green; --> probably will change colors.

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

// associate textarea of hourX to hourX saveBtn
// write into local storage
    
    // TODO: Add code to display the current date in the header of the page.

 // write-in text of current dayjs value to html
});
