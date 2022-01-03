/* DEV-ONLY CORS proxy
const __dev_base_url =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";

const __devHeader = {
  "X-Requested-With": "React",
};
*/

const base_url = "https://www.metaweather.com/api/location/";

export const getGPS = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const url = `${base_url}search/?lattlong=${position.coords.latitude},${position.coords.longitude}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLocationList = async (input) => {
  const url = `${base_url}search/?query=${input}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeather = async (locationState) => {
  const url = `${base_url}${locationState.woeid}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
