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

//function displayCity(event){
//event.preventDefault();
//let cityInput = document.querySelector("#city-input");
//let currentCity = document.querySelector("h1");
//currentCity.innerHTML = cityInput.value;
//}
//let search = document.querySelector(".search-form");
//search.addEventListener("submit", displayCity)

function displayWeather(response) {
    document.querySelector(".city").innerHTML = response.data.name;
    document.querySelector(".current-temperature").innerHTML = Math.round(
      response.data.main.temp 
    );
  
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#pressure").innerHTML = Math.round(
      response.data.pressure
    );
    document.querySelector("#visibility").innerHTML = Math.round(
      response.data.visibility
    );
         }
  
  function searchCity(city) {
    let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  
  function searchLocation(position) {
    let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayWeather);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  let searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  let currentLocationButton = document.querySelector("#current");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  