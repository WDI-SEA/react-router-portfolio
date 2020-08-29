import React from 'react';
// (0K − 273.15) × 9/5 + 32 = -459.7°F
export default function WeatherResult(props) {
  return (
    <div>
      <h4>Weather for {props.weather.name}</h4>
      <p>Currently: {+((props.weather.main.temp - 273.15) * 9/5 + 32).toFixed(2)}°F</p>
      <p>High: {+((props.weather.main.temp_max - 273.15) * 9/5 + 32).toFixed(2)}°F</p>
      <p>Low: {+((props.weather.main.temp_min - 273.15) * 9/5 + 32).toFixed(2)}°F</p>
    </div>
  )
}