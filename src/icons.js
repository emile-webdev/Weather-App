function weatherIcon(conditions) {

    const conditionMap = {
        'Clear': 'wi-day-sunny',
        'Partially cloudy': 'wi-day-cloudy',
        'Cloudy': 'wi-cloudy',
        'Overcast': 'wi-cloud',
        'Rain': 'wi-showers',
        'Thunderstorm': 'wi-thunderstorm',
        'Snow': 'wi-snow',
        'Fog': 'wi-fog',
        'Wind': 'wi-strong-wind',
        'Rain, Partially cloudy': 'wi-day-showers',
        'Rain, Overcast': 'wi-rain'
    };

    return conditionMap[conditions] || 'wi-na'; 
}

export { 
    weatherIcon
}