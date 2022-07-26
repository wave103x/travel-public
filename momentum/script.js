fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Minsk/today?unitGroup=metric&key=Y6PQGUCZT42P3DN63GE2XPUXZ&contentType=json", {
    "method": "GET",
    "headers": {
    }
})
    .then(function (response) { return response.json() })
    .then(response => {
        console.log(response);
        document.querySelector('.city-name').textContent = response.resolvedAddress;
        document.querySelector('.temperature').innerHTML = response.currentConditions.feelslike + '&deg; ' + response.currentConditions.conditions;
        document.querySelector('.wind-speed').textContent = 'Wind speed: ' + response.currentConditions.windspeed + 'm/s';
        document.querySelector('.humidity').textContent = 'Humidity: ' + response.currentConditions.humidity + '%';
        document.querySelector('.weather-icon').innerHTML = `<img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/73c8cc581d8d35076b47047088f3bc91cb1dd675/SVG/1st%20Set%20-%20Monochrome/${response.currentConditions.icon}.svg">`;
    })
    .catch(err => {
        console.error(err);
    });


document.querySelector('.time').textContent = new Date('December 17, 1995 03:24:00');