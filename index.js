const apiKey = "45df5cbd5853121e317fbcf813d0534b";

const weatherInfo = document.getElementById("weatherInfo");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
  const location = searchInput.value;
  getWeather(location);
});

function getWeather(location) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherDescription = data.weather[0].description; // Changed variable name
      const temperature = (data.main.temp - 273.15).toFixed(2); //change the temperature from Kelvin to Celsius

      weatherInfo.innerHTML = `Location 📍:  ${location} <br> Weather ☁️ : ${weatherDescription} <br> Temperature 🌡️ : ${temperature}°C`;

      weatherInfo.style.display = "block";
    })
    .catch((error) => {
      const message = error.message;
      console.log(message);
      weatherInfo.innerHTML = `Error: ${message}`;
      weatherInfo.style.display = "block";
    });
}
