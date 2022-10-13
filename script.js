
let weather = {
    apiKey: '227a4a80a3c9c232031a19bcb4034764',
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + data.name + "')";
            return data;
        })
        .then((data) => this.displayWeather(data))
        .catch((err) => console.log(err))
    },
    displayWeather: function(data) {
        // the blow is the same as writing: const name = data.name
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { humidity } = data.main;
        const { speed } = data.wind;
        const temp = Math.round(data.main.temp);

        document.querySelector('.city').innerText = name;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = `${temp}°C`;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
        document.querySelector('.wind').innerText = `Wind speed: ${speed}km/h`;  
        document.querySelector('.weather').classList.remove('loading');

        // document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
        document.querySelector('.search-bar').value = '';
    }
};

document.querySelector('.search-button').addEventListener('click', () => {
    weather.search()
});

document.querySelector('.search-bar').addEventListener('keyup', (event) => {
    if(event.key == 'Enter') {
         weather.search();
    }
});

weather.fetchWeather('Vancouver');