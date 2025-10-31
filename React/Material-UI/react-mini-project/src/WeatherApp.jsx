import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {

  let [weatherInfo, setWeatherInfo] = useState({
   
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Subhransu</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      {weatherInfo.city && <InfoBox info={weatherInfo}></InfoBox>}
    </div>
  )
}