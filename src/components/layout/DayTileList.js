// components
import DayTile from "../ui/DayTile";
// lib
import { useContext } from "react";
import styled from "styled-components";
// helpers
import { formatDate } from "../../utils/date";
import { WEATHER } from "../../utils/weather";
import { WeatherContext } from "../../context/weatherContext";
import useString from "../../utils/useString";

export default function DayTileList() {
  const weatherCtx = useContext(WeatherContext);
  const t = useString();

  return (
    <Wrapper>
      <Days>
        {weatherCtx.state.map(
          (item, idx) =>
            idx > 0 && (
              <DayTile
                key={idx}
                day={
                  !item.date
                    ? ""
                    : idx === 1
                    ? t("main.tomorrow")
                    : formatDate(navigator.language, item.date)
                }
                high={item.temp.max}
                low={item.temp.min}
                weather={WEATHER[item.weather]?.image}
              />
            )
        )}
      </Days>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const Days = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;
