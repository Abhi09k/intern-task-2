// routes/weatherRoute.js
const express = require('express');
const router = express.Router();
const { getWeatherByCity } = require('../controllers/WeatherController');

router.get('/:city', getWeatherByCity);

module.exports = router;
