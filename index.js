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

function displayWeather(response) {
  let CelsiusTemp =  document.querySelector("#current-temperature")
    document.querySelector(".city").innerHTML = response.data.name;
      CelsiusTemp.innerHTML = Math.round(
      response.data.main.temp 
    );
    document.querySelector("#min-temp").innerHTML = Math.round(
      response.data.main.temp_min 
    );
    document.querySelector("#max-temp").innerHTML = Math.round(
      response.data.main.temp_max 
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#pressure").innerHTML = Math.round(
      response.data.main.pressure
    );
    document.querySelector("#visibility").innerHTML = Math.round(
      response.data.visibility
    );
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
  
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
  
  function displayFarenheitTemp(event) {
    event.preventDefault();
    let currentTemp = document.querySelector("#current-temperature");
   let FarenheitTemp = (CelsiusTemp*9)/5*32; 
   currentTemp.innerHTML = Math.round(FarenheitTemp);

  }
  function displayCelsiusTemp(event){
    event.preventDefault();
    let currentTemp = document.querySelector("#current-temperature");
    currentTemp.innerHTML =Math.round(CelsiusTemp);
  }
  let CelsiusTemp = null;
  let searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  let currentLocationButton = document.querySelector("#current");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
 

  let farenheitLink = document.querySelector(#farenheit-link);
  farenheitLink.addEventListener("click", displayFarenheitTemperature);

  let celsiusLink = document.querySelector(#celsius-link);
  farenheitLink.addEventListener("click", displayCelsiusTemperature);
