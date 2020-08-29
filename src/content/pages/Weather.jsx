import React, { useState } from 'react';
import axios from 'axios';

import WeatherResult from '../components/WeatherResult'

export default function Weather() {
  // TODO: Have error state that sets conditional rendering of an error component
  // TODO: Verify zip is actually a zip
  const [zip, setZip] = useState('')
  const [weather, setWeather] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    // we will call the api using axios
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
    axios.get(url)
    .then(res => {
      // set sum state
      // TODO: Create custom object of deets I want
      setWeather(res.data)
    }).catch(err => console.log(err))
  }

  // conditionally render a weather result component
  return (
    <div>
      <h1>Find Weather in your American Area</h1>
      {weather ? <WeatherResult weather={weather} /> : null}
      <p>Enter your zipcode to find current weather in your area!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zip">Zipcode: </label>
        <input type="text" id="zip" onChange={e => setZip(e.target.value)} />
        <input type="submit" value="Find Weather" />
      </form>
    </div>
  )
}