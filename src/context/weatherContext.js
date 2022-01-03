import React, { createContext, useReducer } from "react";
import { getWeatherByName } from "../theme/weather";

export const WeatherContext = createContext();

const initialState = [
  {
    date: "",
    temp: { min: 0, max: 0, avg: 0 },
    wind: { speed: 0, compass: "" },
    pressure: 0,
    visibility: 0,
    humidity: 0,
    weather: "",
  },
  {
    date: "",
    temp: { min: 0, max: 0, avg: 0 },
    wind: { speed: 0, compass: "" },
    pressure: 0,
    visibility: 0,
    humidity: 0,
    weather: "",
  },
  {
    date: "",
    temp: { min: 0, max: 0, avg: 0 },
    wind: { speed: 0, compass: "" },
    pressure: 0,
    visibility: 0,
    humidity: 0,
    weather: "",
  },
  {
    date: "",
    temp: { min: 0, max: 0, avg: 0 },
    wind: { speed: 0, compass: "" },
    pressure: 0,
    visibility: 0,
    humidity: 0,
    weather: "",
  },
  {
    date: "",
    temp: { min: 0, max: 0, avg: 0 },
    wind: { speed: 0, compass: "" },
    pressure: 0,
    visibility: 0,
    humidity: 0,
    weather: "",
  },
  {
    date: "",
    temp: { min: 0, max: 0, avg: 0 },
    wind: { speed: 0, compass: "" },
    pressure: 0,
    visibility: 0,
    humidity: 0,
    weather: "",
  },
];

const weatherReducer = (state, action) => {
  if (action.type === "update") {
    const data = action.payload.consolidated_weather;
    const newWeatherState = [];
    data.forEach((w) =>
      newWeatherState.push({
        weather: getWeatherByName(w.weather_state_abbr).key,
        date: new Date(w.applicable_date),
        temp: {
          min: Math.round(w.min_temp),
          max: Math.round(w.max_temp),
          avg: Math.round(w.the_temp),
        },
        wind: {
          speed: Math.round(w.wind_speed),
          compass: w.wind_direction_compass,
          direction: Math.round(w.wind_direction),
        },
        pressure: Math.round(w.air_pressure),
        visibility: Math.round(w.visibility),
        humidity: Math.round(w.humidity),
      })
    );
    return newWeatherState;
  }
  if (action.type === "reset") return initialState;
};

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}
