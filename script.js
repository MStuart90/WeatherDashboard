$(document).ready(function () {
    var searches = JSON.parse(localStorage.getItem("searches")) || [];

 
    // $( "#currentDay" ).text(currentDay);
    var cityName = $("#city");
    var temp = $("#temp");
    var feelsLike = $("#feelsLike");
    var humidity = $("#humidity");
    var wind = $("#wind");
    var uv = $("#uv");


    var _5t1 = $("#_5t1");
    var _5h1 = $("#_5h1");
    var _5t2 = $("#_5t2");
    var _5h2 = $("#_5h2");
    var _5t3 = $("#_5t3");
    var _5h3 = $("#_5h3");
    var _5t4 = $("#_5t4");
    var _5h4 = $("#_5h4");
    var _5t5 = $("#_5t5");
    var _5h5 = $("#_5h5");
    


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
            temp.text("Temp: " + response.main.temp)
            feelsLike.text("Feels Like: " + response.main.feels_like)
            humidity.text("Humidity: " + response.main.humidity)
            wind.text("Wind: " + response.wind.speed)
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
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=7e5813874d0192f2d42018c690376afc",
            method: "GET"
        }).then(function (response) {
            console.log("Five day", response); 
            // console.log(response.list[0].main.temp)
            console.log('aloha', response.list[0].main.temp)
            letj = 0
            response.list.forEach(function(myData, i){
                // if(i === 0 || i === 8 || i === 16 || i ===24 || i === 32){
                  _5t1.text("Temp: " + response.list[0].main.temp);  
                  _5t2.text("Temp: " + response.list[8].main.temp);  
                  _5t3.text("Temp: " + response.list[16].main.temp);  
                  _5t4.text("Temp: " + response.list[24].main.temp); 
                  _5t5.text("Temp: " + response.list[32].main.temp); 
                  _5h1.text("Humidity: " + response.list[0].main.humidity);
                  _5h2.text("Humidity: " + response.list[8].main.humidity);  
                  _5h3.text("Humidity: " + response.list[16].main.humidity);  
                  _5h4.text("Humidity: " + response.list[24].main.humidity); 
                  _5h5.text("Humidity: " + response.list[32].main.humidity);  
                // } 
                // }
                

            });
            
            

        })
    })
})


//  date, an icon representation of weather conditions, the temperature, and the humidity
// http://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=7e5813874d0192f2d42018c690376afc

