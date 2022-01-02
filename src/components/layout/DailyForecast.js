import DayTile from "../ui/DayTile";
import getDates from "../../utils/date";
import { useMemo } from "react";
import { WEATHER } from "../../theme/weather";
import styled from "styled-components";

export default function DailyForecast({ currentDay }) {
  const dates = useMemo(() => getDates(currentDay), [currentDay]);
  return (
    <DailyForecastWrapper>
      <Days>
        {dates.map(
          (date, idx) =>
            idx > 0 && (
              <DayTile
                key={idx}
                day={date.name}
                high="16"
                low="11"
                weather={WEATHER.SNOW}
              />
            )
        )}
      </Days>
    </DailyForecastWrapper>
  );
}

const DailyForecastWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const Days = styled.div`
  width: 100%;
  margin: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;
