var coordinates;
var cityInfoEl = $(".cityInfo");
var tempEl = $(".temp");
var humidityEl = $(".humidity");
var windSpeedEl = $(".windSpeed");
var uvIndexEl = $(".uvIndex");

function getForecast(cityName) {

    var city = cityName.trim();
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7e5813874d0192f2d42018c690376afc"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {

        var lat = response.city.coord["lat"];
        var lon = response.city.coord["lon"];

        var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=hourly,minutely,alert&appid=7e5813874d0192f2d42018c690376afc"
