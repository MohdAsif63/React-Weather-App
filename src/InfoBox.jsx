/* eslint-disable react/prop-types */
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function InfoBox({ info }) {
 return (
  <div className="weather-info">

    <div className="current-weather">
      <p className="city-name">{info.city}</p>

      <h2 className="temperature">{info.temp}°C</h2>

      <p className="weather-condition">{info.weather}</p>

      <p className="feels-like">
        Feels like {info.feelsLike}°C
      </p>
    </div>

    <div className="weather-details">

      <div className="detail-item">
        <WaterDropIcon />
        <span>Humidity</span>
        <h3>{info.humidity}%</h3>
      </div>

      <div className="detail-item">
        <AcUnitIcon />
        <span>Minimum Temp</span>
        <h3>{info.tempMin}°C</h3>
      </div>

      <div className="detail-item">
        <WbSunnyIcon />
        <span>Maximum Temp</span>
        <h3>{info.tempMax}°C</h3>
      </div>

    </div>
  </div>
);
}