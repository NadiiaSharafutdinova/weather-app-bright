//let weather = {
    //paris: {
      //temp: 19.7,
      //humidity: 80
    //},
    //tokyo: {
    //  temp: 17.3,
   //   humidity: 50
    //},
    //lisbon: {
    //  temp: 30.2,
    //  humidity: 20
   //},
   // "san francisco": {
     // temp: 20.9,
//humidity: 100
  //  },
   // oslo: {
   //   temp: -5,
    //  humidity: 20
  //  }
 // };
  
   //let city = prompt("Enter a city");
  //city = city.toLowerCase();
 /// if (weather[city] !== undefined) {
   // let temperature = weather[city].temp;
  //  let humidity = weather[city].humidity;
  //  let tempCelsius = Math.round(temperature);
   // let tempFahrenheit = Math.round((temperature * 9) / 5 + 32);
  
    //alert(
    //  `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${city} with a humidity of ${humidity}%`
   // );
  //} else {
   // alert(
  //    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
   // );
 // }
  let currentDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentDate.getDay()];

let hour = currentDate.getHours();
if (hour <10){
  hour = `0${hour}`
}
let minute = currentDate.getMinutes();
if(minute <10){
  minute = `0${minute}`
}
let nowTime = document.querySelector(".time");
nowTime.innerHTML = ` ${hour}:${minute}`;

let date = currentDate.getDate();
let month = currentDate.getMonth();
let nowDate = document.querySelector(".date");
nowDate.innerHTML = `${day}, ${date}.${month}`

function displayCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = cityInput.value;
}
let search = document.querySelector(".search-form");
search.addEventListener("submit", displayCity)


function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector(".current-temperature");
  currentTemperature.innerHTML = `${temperature} &#8451;|F`;
  if (temperature > 0){
    currentTemperature.innerHTML = `+${temperature} &#8451;|F`
  }
}
let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

axios.get(url).then(showTemperature);

function displayPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude; 
  let location = document.querySelector("#currentPosition");
location.innerHTML = `${response.data.name}`;
}
navigator.geolocation.getCurrentPosition(displayPosition);
let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", displayPosition);
