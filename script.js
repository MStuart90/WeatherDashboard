$(document).ready(function () {
    var searches = JSON.parse(localStorage.getItem("searches")) || [];
 


    $("form").on("submit", function (event) {
        event.preventDefault();
 
        // Retrieve city value from input
        var city = $("#search").val().trim();

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7e5813874d0192f2d42018c690376afc",
            method: "GET"
        }).then(function (response) {
            // Add city to search history
            if (!searches.includes(response.name)) {
                searches.push(response.name);
            }
            localStorage.setItem("searches", JSON.stringify(searches));
            $("#search").val("");
            renderHistory();
