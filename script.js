
let string = 'Leo'

let weather = {
    apiKey: '227a4a80a3c9c232031a19bcb4034764',
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    },
    displayWeather: function(data) {
        // const name = data.name
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector('.city').innerText = name;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.pgn`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
        document.querySelector('.wind').innerText = `Wind speed: ${speed}km/h`;   
    },
};



console.log('weather');

weather.fetchWeather('toronto');