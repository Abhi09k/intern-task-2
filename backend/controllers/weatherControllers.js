// controllers/WeatherController.js
const axios = require('axios');

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual key

exports.getWeatherByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = response.data;

    res.status(200).json({
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
