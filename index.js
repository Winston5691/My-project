
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=faa70cbaae7edf4ddc280057abe67d2c`)
.then(res => res.json())
.then(data => {

{
    {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=faa70cbaae7edf4ddc280057abe67d2c" +
          location + "&units=metric&appid=" + this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("We are still mourning Willard Herman Scott Jr, so there is no news to report!!");
            throw new Error("We are still mourning Willard Herman Scott Jr, so there is no news to report!!");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".location").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
    
    weather.fetchWeather("Nairobi")