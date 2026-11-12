import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Agra",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  const getBackground = () => {
  const weather = weatherInfo.weather;

  if (weather === "clear") return "sunny";
  if (weather === "clouds") return "cloudy";
  if (weather === "rain" || weather === "drizzle") return "rainy";
  if (weather === "snow") return "snow";
  if (weather === "thunderstorm") return "thunderstorm";

  return "haze";
};

  return (
    <div className={`weather-app ${getBackground()}`}>
      <h1 className="h1">Weather App</h1>

    <div className="weather-dashboard">
  <SearchBox updateInfo={updateInfo} />
  <InfoBox info={weatherInfo} />
</div>
    </div>
  );
}
