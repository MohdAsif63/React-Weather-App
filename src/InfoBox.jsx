/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {

  const HOT_URL = "https://images.unsplash.com/photo-1610885450672-bdd5f1a0567d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;{
                info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon />: <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}°C</p>
              <p>Max Temp: {info.tempMax}°C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like{" "} {info.feelsLike}&deg;C </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
