export const WEATHER = {
  CLEAR: {
    key: "CLEAR",
    value: "Clear",
    api_name: "Clear",
    image: "weather_clear.png",
  },
  HAIL: {
    key: "HAIL",
    value: "Hail",
    api_name: "Hail",
    image: "weather_hail.png",
  },
  HEAVYCLOUDS: {
    key: "HEAVYCLOUDS",
    value: "Heavy clouds",
    api_name: "Heavy Cloud",
    image: "weather_heavycloud.png",
  },
  HEAVYRAIN: {
    key: "HEAVYRAIN",
    value: "Heavy rain",
    api_name: "Heavy Rain",
    image: "weather_heavyrain.png",
  },
  LIGHTCLOUDS: {
    key: "LIGHTCLOUDS",
    value: "Light clouds",
    api_name: "Light Cloud",
    image: "weather_lightcloud.png",
  },
  LIGHTRAIN: {
    key: "LIGHTRAIN",
    value: "Light rain",
    api_name: "Light Rain",
    image: "weather_lightrain.png",
  },
  SHOWERS: {
    key: "SHOWERS",
    value: "Showers",
    api_name: "Showers",
    image: "weather_shower.png",
  },
  SLEET: {
    key: "SLEET",
    value: "Sleet",
    api_name: "Sleet",
    image: "weather_sleet.png",
  },
  SNOW: {
    key: "SNOW",
    value: "Snow",
    api_name: "Snow",
    image: "weather_snow.png",
  },
  THUNDERSTORM: {
    key: "THUNDERSTORM",
    value: "Thunderstorms",
    api_name: "Thunderstorm",
    image: "weather_thunderstorm.png",
  },
};

export const getWeatherByName = (value) => {
  switch (value) {
    case "sn":
      return WEATHER.SNOW;
    case "sl":
      return WEATHER.SLEET;
    case "h":
      return WEATHER.HAIL;
    case "t":
      return WEATHER.THUNDERSTORM;
    case "hr":
      return WEATHER.HEAVYRAIN;
    case "lr":
      return WEATHER.LIGHTRAIN;
    case "s":
      return WEATHER.SHOWERS;
    case "hc":
      return WEATHER.HEAVYCLOUDS;
    case "lc":
      return WEATHER.LIGHTCLOUDS;
    case "c":
      return WEATHER.CLEAR;
    default:
      return WEATHER.CLEAR;
  }
};
