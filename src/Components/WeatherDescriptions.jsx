import React from 'react'

const WeatherDescriptions = ({data}) => {
  if (!data.weather) {
    return null;
  }

  const weather = data.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}.png`;

  return (
    <p className="weather-conditions">
      <img src={iconUrl} alt="Weather Icon" />
      {weather.description}
    </p>
  );
};

export default WeatherDescriptions