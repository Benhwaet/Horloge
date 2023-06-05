var title = $("h1");
var lead = $(".lead");

//display current date and time in header
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
var input = $("input");
// Wrapper to ensure functions only run once page has completed loading
$(document).ready(function() {
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    timeBlock.each(function(){
      var buttonID = $(this).attr("id");
      var textBox = $(this).children(".task");
      textBox.val(localStorage.getItem(buttonID)); 
      })
// Saves the text entries in the input textarea to local storage 
// with a key value of the time-block id which contains the save button in question. 
    saveBtn.click(function(){
      var taskText = $(this).prev().val();
      var buttonID = $(this).parent().attr("id");
      console.log(taskText);
     localStorage.setItem(buttonID, taskText);
    });

    
// Function checks current time status and marks 
// which calendar time is in the past, present, or future.
function status() {
timeBlock.each(function(){
  var formID = $(this).attr("id");
  if (formID < currentHour) {
    $(this).addClass("past");
  } else if (formID == currentHour){
    // $(this).removeClass("past")
    $(this).addClass("present");
  } else if (formID > currentHour){
    $(this).addClass("future");
}
});  
} 
//Runs the time status fonction
status()

});

