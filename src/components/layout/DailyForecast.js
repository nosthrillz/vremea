import DayTile from "../ui/DayTile";
import { formatDate } from "../../utils/date";
import { useContext } from "react";
import { WEATHER } from "../../theme/weather";
import styled from "styled-components";
import { WeatherContext } from "../../context/weatherContext";

export default function DailyForecast() {
  const wCtx = useContext(WeatherContext);

  return (
    <DailyForecastWrapper>
      <Days>
        {wCtx.state.map(
          (item, idx) =>
            idx > 0 && (
              <DayTile
                key={idx}
                day={
                  !item.date
                    ? ""
                    : idx === 1
                    ? "Tomorrow"
                    : formatDate(item.date)
                }
                high={item.temp.max}
                low={item.temp.min}
                weather={WEATHER[item.weather]?.image}
              />
            )
        )}
      </Days>
    </DailyForecastWrapper>
  );
}

const DailyForecastWrapper = styled.div`
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
