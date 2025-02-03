import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import WeatherCard from "./WeatherCard";
import "./Weather.css";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get("https://api.weatherapi.com/v1/current.json", {
          params: {
            key: "5a1a6851498f462192951809232807",
            q: city
          }
        })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error occured in fetching Weather data", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div>
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-ctn">
          <WeatherCard title="Temperature" data={weatherData.current.temp_c} />
          <WeatherCard title="Humidity" data={weatherData.current.humidity} />
          <WeatherCard
            title="Condition"
            data={weatherData.current.condition.text}
          />
          <WeatherCard title="Wind Speed" data={weatherData.current.wind_kph} />
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
    city: PropTypes.string.isRequired,
  };

export default Weather;
