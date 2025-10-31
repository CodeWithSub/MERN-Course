import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {


  let [city, setCity] = useState("")
  let [error, setError] = useState(false)

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feelsLike,
        weather: jsonResponse.weather[0].description,
      }
      return result;
    } catch (err) {
      throw err
    }
  }


  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false)
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className='search-box'>
      <h3>Search for the weather🌦️</h3>
      <form action="#">

        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
        <br />
        <br />
        <Button type='submit' variant="contained" onClick={handleSubmit}>Search</Button>
        {error && <p>No data available for this location!😢</p>}
      </form>
    </div>
  )
}