// components
import InfoCard from "../ui/InfoCard";
// lib
import { useContext } from "react";
import styled from "styled-components";
// helpers
import { WeatherContext } from "../../context/weatherContext";
import { SIZES } from "../../theme/spacing";
import useString from "../../utils/useString";

export default function DailyHighlights() {
  const weatherCtx = useContext(WeatherContext);
  const todayState = weatherCtx.state[0];
  const t = useString();

  return (
    <Wrapper>
      <h1>{t("main.highlights")}</h1>
      <Highlights>
        <InfoCard
          type="wind"
          text={t("main.wind")}
          value={todayState.wind.speed}
          direction={todayState.wind.direction}
          compass={t(`compass.${todayState.wind.compass}`)}
          unit="mph"
        />
        <InfoCard
          type="humidity"
          text={t("main.humidity")}
          value={todayState.humidity}
          unit="%"
        />
        <InfoCard
          type="visibility"
          text={t("main.visibility")}
          value={todayState.visibility}
          unit="mi"
        />
        <InfoCard
          type="pressure"
          text={t("main.pressure")}
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
