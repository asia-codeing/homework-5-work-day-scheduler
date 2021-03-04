// Display today's day and date
function dateTime(){
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
var currentTime = moment().format('LTS');
$("#currentTime").html(currentTime);
}
setInterval(dateTime, 1000);

$(document).ready(function(){
    //Add click listener to the save button
    $(".saveBtn").on("click", function(){
        // Get the values of the textarea by using JQuery
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Save time and task in local storage
        localStorage.setItem(time, task);
    }) 
    function timeTracking(){
        var now = moment().hour();
        if (now > 9){
            $("#time9").addClass("past");
        } else if (now >= 9 && now < 10) {
            $("#time9").addClass("present");
        } else if (now < 9) {
        $("#time9").addClass("future");
        }
        if (now > 10) {
            $("#time10").addClass("past");
        } else if (now >= 10 && now < 11) {
            $("time10").addClass("present");
        } else if (now < 10) {
            $("#time10").addClass("future");
        }
        if (now > 11) {
            $("#time11").addClass("past");
        } else if (now >= 11 && now < 12) {
            $("#time11").addClass("present");
        } else if (now < 11) {
            $("#time11").addClass("future");
        }
        if (now > 12) {
            $("#time12").addClass("past");
        } else if (now >= 12 && now < 13) {
            $("#time12").addClass("present");
        } else if (now < 12) {
            $("#time12").addClass("future");
        }
        if (now > 13) {
            $("#time1").addClass("past");
        } else if (now >= 13 && now < 14) {
            $("#time1").addClass("present");
        } else if (now < 13) {
            $("#time1").addClass("future");
        }
        if (now > 14) {
            $("#time2").addClass("past");
        } else if (now >= 14 && now < 15) {
            $("#time2").addClass("present");
        } else if (now < 14) {
            $("#time2").addClass("future");
        }
        if (now > 15) {
            $("#time3").addClass("past");
        } else if (now >= 15 && now < 16) {
            $("#time3").addClass("present");
        } else if (now < 15) {
            $("#time3").addClass("future");
        }
        
        if (now > 16) {
            $("#time4").addClass("past");
          } else if (now >= 16 && now < 17) {
            $("#time4").addClass("present");
          } else if (now < 16) {
            $("#time4").addClass("future");
          }
        if (now > 17) {
            $("#time5").addClass("past");
          } else if (now >= 17 && now < 18) {
            $("#time5").addClass("present");
          } else if (now < 17) {
            $("#time5").addClass("future");
          }
    }

    // Get item from local storage if we have any
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    timeTracking();
})