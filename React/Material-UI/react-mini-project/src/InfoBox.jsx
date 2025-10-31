import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({ info }) {

  const HOT_URL = "https://img.freepik.com/free-vector/flat-design-landscape_23-2149141016.jpg"

  const COLD_URL = "https://www.shutterstock.com/image-vector/girl-playing-snowballs-winter-against-600nw-2116634138.jpg"

  const RAIN_URL = "https://i.pinimg.com/474x/ee/df/04/eedf04fbc5a679a96b7ed5e0c8ba364a.jpg"

  return (

    <div className="info-box">
      <h2>Weather info</h2>
      <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : (info.temp > 20) ? HOT_URL : COLD_URL}
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {info.city.charAt(0).toUpperCase() + info.city.slice(1)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
              <p>Temperature: {info.temp}&deg;</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}&deg;</p>
              <p>Max Temp:: {info.tempMax}&deg;</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}