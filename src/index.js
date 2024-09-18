import './style.css';
import { apiData, requiredData } from './api';
import { weatherIcon } from './icons';
import clear from '../img/clear.jpg';
import cloudy from '../img/cloudy.jpg';
import fog from '../img/fog.jpg';
import overcast from '../img/overcast.jpg';
import partlyCloudy from '../img/partly-cloudy.jpg';
import rainOvercast from '../img/rain-overcast.jpg';
import showers from '../img/showers.jpg';
import snow from '../img/snow.jpg';
import thunderstorm from '../img/thunderstorm.jpg';
import wind from '../img/wind.jpg';

document.getElementById('location-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const location = document.getElementById('location-input').value;
    const weatherData = await apiData(location);
    const todaysData = requiredData(weatherData);
    
    displayWeather(todaysData);
});

function displayWeather(data) {
    const weatherContainer = document.querySelector('#weather-container');
    const iconClass = weatherIcon(data.conditions);
    changeBackgroundImage(data.conditions);
    
    const currentWeatherHtml = `
        <h2>Today's Weather ${data.location}</h2>
        <p>Time: ${data.time}</p>
        <i class="wi ${iconClass}"></i>
        <p id="current-temp">${data.temperature}&degC</p>
        <p class="cond">${data.conditions}</p>
        <div class="current-cards-container">
            <card class="card">
                <h4>Clouds</h4>
                <i class="wi wi-cloud"></i>
                <p>${data.clouds}%</p>
            </card>
            <card class="card">
                <h4>Precipitation</h4>
                <i class="wi wi-day-rain"></i>
                <p>${data.precipitation}%</p>
            </card>
            <card class="card">
                <h4>Wind Speed</h4>
                <i class="wi wi-strong-wind"></i>
                <p>${data.windSpeed}km/h</p>
            </card>
            <card class="card">
                <h4>Humidity</h4>
                <i class="wi wi-humidity"></i>
                <p>${data.humidity}%</p>
            </card>
            <card class="card">
                <h4>Pressure</h4>
                <i class="wi wi-barometer"></i>
                <p>${data.pressure}mb</p>
            </card>
            <card class="card">
                <h4>UV Index</h4>
                <i class="wi wi-hot"></i>
                <p>${data.uvIndex}</p>
            </card>
        </div>
    `;
    
    const forecastWeatherHtml = data.forecastData.map(day => {
        const date = new Date(day.date);
        const weekdayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const iconClass = weatherIcon(day.conditions);
        
        return `
            <div 
                class="forecast-day" 
                data-max-celsius="${day.tempMax}" 
                data-min-celsius="${day.tempMin}" 
            >
                <div class="day-date">
                    <h3>${weekdayName}</h3>
                    <p>${date.toLocaleDateString('en-US')}</p>
                    <i class="wi ${iconClass}"></i>
                </div>
                <div class="day-data">
                    <p>High: ${day.tempMax}&degC</p>
                    <p>Low: ${day.tempMin}&degC</p>
                    <p>${day.conditions}</p>
                </div>
            </div>
        `;
    }).join('');
    
    weatherContainer.innerHTML = `
    <section class="today-container">
        ${currentWeatherHtml}
    </section> 
    <section class="forecast-container">
        <h3>Forecast</h3>
        ${forecastWeatherHtml}
    </section>
    `
}

function changeBackgroundImage(conditions) {
    
    const backgroundImage = {
        'Clear': clear,
        'Cloudy': cloudy,
        'Fog': fog,
        'Overcast': overcast,
        'Partially cloudy': partlyCloudy,
        'Rain, Overcast': rainOvercast,
        'Rain, Partially cloudy': showers,
        'Snow': snow,
        'Thunderstorm': thunderstorm,
        'Wind': wind
    };
    
    const defaultImg = clear;
    const background = backgroundImage[conditions] || defaultImg;
    document.body.style.backgroundImage = `url(${background})`;
}
changeBackgroundImage();