document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');

    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const cityName = document.getElementById('city-name');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    // Function to fetch weather data
    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            console.log(data);

            // Update UI with fetched data
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            cityName.textContent = data.name;
            humidity.textContent = `${data.main.humidity}%`;
            windSpeed.textContent = `${data.wind.speed} m/s`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        }
    };

    // Event listener for search button click
    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    // Initial load with a default city (optional)
    fetchWeatherData('New York'); // Replace with your default city if needed
});

