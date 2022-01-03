import React from "react";
import ReactDOM from "react-dom";
import "./theme/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LocationProvider } from "./context/locationContext";
import { UiProvider } from "./context/uiContext";
import { WeatherProvider } from "./context/weatherContext";

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <UiProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </UiProvider>
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
