import React, { useContext, useState } from "react";
import Button from "../ui/Button";
import CircleButton from "../ui/CircleButton";
import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import { SIZES } from "../../theme/spacing";
import IconGPS from "../../images/icon_gps.svg";
import IconLocation from "../../images/icon_location.svg";
import CloudsBackground from "../../images/Cloud-background.png";
import { LocationContext } from "../../context/locationContext";
import useImage from "../../utils/useImage";
import { WeatherContext } from "../../context/weatherContext";
import Spinner from "../ui/Spinner";
import { formatDate } from "../../utils/date";
import { getGPS, getWeather } from "../../utils/api";
import { WEATHER } from "../../theme/weather";
import { UiContext } from "../../context/uiContext";
import { convertToF } from "../../utils/tempConvert";

export default function TodayForecast({ onSearch }) {
  const [isLoading, setIsLoading] = useState(false);
  const locCtx = useContext(LocationContext);
  const wCtx = useContext(WeatherContext);
  const weatherImg = !!wCtx.state[0].weather
    ? WEATHER[wCtx.state[0].weather].image
    : "weather_clear.png";
  const { image } = useImage(weatherImg);
  const currentDate = formatDate();
  const uiCtx = useContext(UiContext);
  const isCelsius = uiCtx.state.isCelsius;
  const units = isCelsius ? "C" : "F";

  const handleGetGPSLocation = async () => {
    setIsLoading(true);
    const gps = await getGPS();
    const lattlong = gps[0].latt_long.split(",");

    const payload = {
      lat: lattlong[0],
      long: lattlong[1],
      name: gps[0].title,
      woeid: gps[0].woeid,
    };

    await locCtx.dispatch({
      type: "update",
      payload,
    });
    const newData = await getWeather(payload);
    await wCtx.dispatch({ type: "update", payload: newData });

    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Buttons>
        <Button variant="secondary" onClick={onSearch}>
          Search for places
        </Button>
        <CircleButton
          variant="secondary"
          rounded={true}
          onClick={handleGetGPSLocation}
        >
          <img src={IconGPS} alt="current GPS location icon" />
        </CircleButton>
      </Buttons>
      <WeatherImage>
        <img
          className="background"
          src={CloudsBackground}
          alt="clouds background"
        />
        <img className="weather" src={image} alt="weather" />
      </WeatherImage>
      <WeatherTemp>
        <h1>
          {isCelsius
            ? wCtx.state[0].temp.avg
            : convertToF(wCtx.state[0].temp.avg)}
          <span>º{units}</span>
        </h1>
        <h2>{WEATHER[wCtx.state[0].weather]?.value}</h2>
      </WeatherTemp>
      <DateTimePlace>
        <Date>
          <p>Today</p>
          <p className="date">{currentDate}</p>
        </Date>
        <Location>
          <img src={IconLocation} alt="location icon" />
          <p>{locCtx.state?.name ? locCtx.state.name : "Unknown location"}</p>
        </Location>
      </DateTimePlace>
      {isLoading && <Spinner />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: ${SIZES.layout.side.width};
  background: ${COLORS.bkg.ui};
  padding: ${SIZES.inc_2};
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: ${SIZES.inc_4};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: ${SIZES.breakpoint.mobile}) {
    width: 100%;
    position: static;
    min-height: 100vh;
    padding: ${SIZES.default};
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WeatherImage = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img.background {
    opacity: 0.1;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: calc(${SIZES.inc_2} - 50%);
    @media screen and (max-width: ${SIZES.breakpoint.mobile}) {
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 100%;
      height: auto;
    }
  }
  img.weather {
    width: 200px;
    height: 200px;
  }
`;

const WeatherTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SIZES.inc_4};
  margin: ${SIZES.inc_3} 0;

  h1 {
    font-size: calc(${SIZES.inc_4} * 2.5);
    font-weight: 400;

    span {
      font-size: ${SIZES.inc_4};
      color: ${COLORS.text.secondary};
    }
  }

  h2 {
    font-size: ${SIZES.inc_3};
    font-weight: 600;
    color: ${COLORS.text.secondary};
  }
`;

const DateTimePlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SIZES.inc_2};
  font-size: ${SIZES.inc_1_5};
  color: ${COLORS.text.secondary};
  width: 100%;
  margin: ${SIZES.inc_3} 0;
`;

const Date = styled.div`
  display: flex;

  p.date:before {
    content: "•";
    display: inline;
    margin: ${SIZES.inc_1_5};
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${SIZES.dec_0_5};
`;
