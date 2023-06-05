var title = $("h1");
var lead = $(".lead");
//display real time in lead
// TODO: Add code to display the current date in the header of the page.
var display = dayjs().format("dddd, MMMM D YYYY, HH:mm a");
var horloge = $("#horloge");
horloge.text(display);

var calendar = $(".calendar");

// to use in comparison with form ids [06, 07, 08, etc.]
var currentHour = dayjs().hour();
console.log(currentHour);

//To set saveBtn event
var saveBtn = $(".saveBtn");

var task = $(".task");
var timeBlock = $(".time-block");


$(document).ready(function() {

 // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

// addEventListener to saveBtn, to target time-block by using 'this' syntax
// to identify approptiate time-block container and save text data to local storage.
saveBtn.on("click", function() {
  var taskText = task.val();
  console.log(taskText);
 localStorage.setItem("taskText", taskText);
});


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

// associate textarea of hourX to hourX saveBtn
// write into local storage

function status() {
timeBlock.each(function(){
  var formID = $(this).attr("id");
  if (formID < currentHour) {
    $(this).addClass("past");
  } else if (formID == currentHour){
    $(this).removeClass("past")
    $(this).addClass("present");
  } else if (formID > currentHour){
    $(this).addClass("future");
}
});
} status()

});

