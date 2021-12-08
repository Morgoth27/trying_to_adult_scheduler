$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd MMMM Do"))

    $(".saveBtn").on('click', function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, value);
    })

    $('#delete-btn').on('click', function() {
        localStorage.clear();
        window.location.reload()
    })

    function checkHour() {
        var currentHour = moment().hours();

        $('.time-block').each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
            if(hourBlock < currentHour) {
                $(this).addClass("past")
            } else if(hourBlock === currentHour) {
                $(this).addClass("present")
                $(this).removeClass("past")
            } else {
                $(this).addClass("future")
                $(this).removeClass("past")
                $(this).removeClass("present")
            }
        })
    }

    checkHour();

    var interval = setInterval(checkHour, 10000)

    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))
    $("#hour-18 .description").val(localStorage.getItem("hour-18"))
    $("#hour-19 .description").val(localStorage.getItem("hour-19"))

})