// DEVELOPMENT ONLY
//TODO: REPLACE WITH ACTUAL API

const base_url =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";

const devHeader = {
  "X-Requested-With": "React",
};

export const getGPS = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const devUrl = `${base_url}search/?lattlong=${position.coords.latitude},${position.coords.longitude}`;
  try {
    const response = await fetch(devUrl, devHeader);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLocationList = async (input) => {
  const devUrl = `${base_url}search/?query=${input}`;

  try {
    const response = await fetch(devUrl, devHeader);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// get weather based on state
export const getWeather = async (locationState) => {
  const devUrl = `${base_url}${locationState.woeid}`;

  try {
    const response = await fetch(devUrl, devHeader);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
