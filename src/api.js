const api_key = 'HDQ37NYBYDG5RPSCNVXVT36DR';
let units = 'metric';

async function apiData(location) {

    const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${api_key}&contentType=json`;
    
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        
        const data = await response.json();
        console.log(data); 
        return data;
    } catch (error) {
        console.log('Failed to fetch API data:', error);
    }
}

function requiredData(data) {
    const { address, currentConditions, days } = data;
    
    // Today's weather data
    const todaysData = {
        location: address,
        time: new Date().toLocaleString('en-US', {
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            hour12: true, 
            hour: '2-digit', 
            minute: '2-digit'
        }),
        clouds: currentConditions.cloudcover,
        precipitation: currentConditions.precipprob,
        humidity: currentConditions.humidity,
        pressure: currentConditions.pressure,
        uvIndex: currentConditions.uvindex,
        temperature: currentConditions.temp,
        conditions: currentConditions.conditions,
        windSpeed: currentConditions.windspeed,
    };

    // Forecast weather data
    const forecastData = days.slice(1, 7).map(day => ({
        date: day.datetime,
        tempMax: day.tempmax,
        tempMin: day.tempmin,
        conditions: day.conditions
    }));
    
    todaysData.forecastData = forecastData;
    console.log(todaysData); 
    return todaysData;
}

export {
    apiData,
    requiredData
}