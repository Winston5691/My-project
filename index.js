let Description = document.querySelector('.description');
const icon = document.querySelector('.icon');
let search = document.getElementById('search');
let city = document.querySelector('.city');
let temperature = document.querySelector('.temp');
let Humidity = document.querySelector('.humidity');
let weatherLoading = document.getElementById('weather-loading');
let locationForm = document.getElementById('location-form');
let windSpeed = document.querySelector('.wind');


search.addEventListener('click',event =>{
    event.preventDefault();
    let locationSearch = locationForm.locationSearch.value;

//Using the API to retrieve weather data-API from 0pen weathermap database
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=faa70cbaae7edf4ddc280057abe67d2c`)
.then(res => res.json())
.then(data => {
 
    weatherLoading.classList.remove('weather-loading');
    city.innerHTML = `Weather in ${locationSearch}`;
    Humidity.innerHTML = `Humidity: ${data.main.humidity} % `;
    temperature.innerHTML = `${data.main.temp} K`;
    Description.innerText = `${data.weather[0].description}`;
    windSpeed.innerHTML = `WindSpeed: ${data.wind.speed} km/h`;

    icon.setAttribute('src', `https://openweathermap.org/img/wn/${ data.weather[0].icon }.png`)
 
}).catch(data => {
    city.innerHTML = "Error! Location Can't be Found"; 
})
})
