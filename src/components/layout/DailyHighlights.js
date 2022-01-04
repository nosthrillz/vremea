// components
import InfoCard from "../ui/InfoCard";
// lib
import { useContext } from "react";
import styled from "styled-components";
// helpers
import { WeatherContext } from "../../context/weatherContext";
import { SIZES } from "../../theme/spacing";

export default function DailyHighlights() {
  const weatherCtx = useContext(WeatherContext);
  const todayState = weatherCtx.state[0];

  return (
    <Wrapper>
      <h1>Today's highlights</h1>
      <Highlights>
        <InfoCard
          type="wind"
          text="Wind status"
          value={todayState.wind.speed}
          direction={todayState.wind.direction}
          compass={todayState.wind.compass}
          unit="mph"
        />
        <InfoCard
          type="humidity"
          text="Humidity"
          value={todayState.humidity}
          unit="%"
        />
        <InfoCard
          type="visibility"
          text="Visibility"
          value={todayState.visibility}
          unit="miles"
        />
        <InfoCard
          type="pressure"
          text="Air pressure"
          value={todayState.pressure}
          unit="mb"
        />
      </Highlights>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction column;
  align-items: center;
  margin-top: ${SIZES.inc_3};
  margin-left: auto;
  margin-right: auto;
  gap: ${SIZES.inc_2};

  h1 {
      align-self: flex-start;
  }
  @media screen and (max-width: ${SIZES.breakpoint.tablet}) {
    margin-top: ${SIZES.default};
  }
`;

const Highlights = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${SIZES.inc_3};
  justify-items: center;

  @media screen and (max-width: ${SIZES.breakpoint.tablet}) {
    gap: ${SIZES.inc_1_5};
  }
`;
