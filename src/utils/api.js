const base_url = "https://www.metaweather.com/api/location/";

// CORS proxy
const proxy_base_url = `${process.env.REACT_APP_PROXY_URL}/${base_url}`;
const proxy_header = {
  "X-Requested-With": "React",
};

export const getGPS = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const url = `${proxy_base_url}search/?lattlong=${position.coords.latitude},${position.coords.longitude}`;
  try {
    const response = await fetch(url, proxy_header);
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export const getLocationList = async (input) => {
  const url = `${proxy_base_url}search/?query=${input}`;

  try {
    const response = await fetch(url, proxy_header);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeather = async (locationState) => {
  const url = `${proxy_base_url}${locationState.woeid}`;

  try {
    const response = await fetch(url, proxy_header);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
