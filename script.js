$(document).ready(function () {
    var searches = JSON.parse(localStorage.getItem("searches")) || [];
 
    // $( "#currentDay" ).text(currentDay);
    var cityName = $("#city");
    var temp = $("#temp");
    var feelsLike = $("#feelsLike");
    var humidity = $("#humidity");
    var wind = $("#wind");
    var uv = $("#uv");


    $("form").on("submit", function (event) {
        event.preventDefault();
 
        // Retrieve city value from input
        var citySearch = $("#search").val().trim();

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=7e5813874d0192f2d42018c690376afc",
            method: "GET"
        }).then(function (response) {
            console.log(response); 
            cityName.text("City: " + response.name)
            temp.text(response.main.temp)
            feelsLike.text(response.main.feels_like)
            humidity.text(response.main.humidity)
            wind.text(response.wind.speed)
            // uv.text(response.weather[0].icon) 
            


            // Add city to search history
            if (!searches.includes(response.name)) {
                searches.push(response.name);
            }
            localStorage.setItem("searches", JSON.stringify(searches));
            $("#search").val("");
            // renderHistory();
        })
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=7e5813874d0192f2d42018c690376afc",
            method: "GET"
        }).then(function (response) {
            console.log("Five day", response); 
            console.log(response.list[0].main.temp)
            humidity.text(response.main.humidity)

        })
    })
})


//  date, an icon representation of weather conditions, the temperature, and the humidity
// http://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=7e5813874d0192f2d42018c690376afc

