/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState(""); 
  let [error , setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9219ee09f464532ef4c9e12cb5680301";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      const result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
     throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
    if (city.trim() === "") return; 
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo); 
    }
    setCity(""); 
    } catch(err){
      setError(true);
      setTimeout(() => window.location.reload(), 3000);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}><b>No such place exists!</b></p>}
      </form>
    </div>
  );
}
