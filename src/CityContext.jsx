import { createContext, useContext, useState } from "react";
import axios from "axios";

const CityContext = createContext();

export const Context = () => useContext(CityContext);

export const CityProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [coords, setcoords] = useState([]);

  const key = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&cnt=5`
      );
      setWeatherData(response.data);
        const mapResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);
        if(mapResponse.data.length>0){
            const {lat, lon} = mapResponse.data[0];
                setcoords([lat, lon]);
             }


    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <CityContext.Provider
      value={{ weatherData, city, setCity, fetchWeatherData, coords}}
    >
      {children}
    </CityContext.Provider>
  );
};
