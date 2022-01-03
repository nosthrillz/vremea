// components
import Locations from "./components/layout/Locations";
import TodayForecast from "./components/layout/TodayForecast";
import DayTileList from "./components/layout/DayTileList";
import DailyHighlights from "./components/layout/DailyHighlights";
import UnitSwitcher from "./components/ui/UnitSwitcher";
// lib
import styled from "styled-components";
import { useState } from "react";
// helpers
import { SIZES } from "./theme/spacing";

function App() {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <Wrapper>
      <TodayForecast onSearch={() => setShowLocations(true)} />
      <Locations
        visible={showLocations}
        onClose={() => setShowLocations(false)}
      />

      <ForecastWrapper>
        <UnitSwitcher />
        <DayTileList currentDay={new Date()} />
        <DailyHighlights />
      </ForecastWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;

  @media screen and (max-width: ${SIZES.breakpoint.mobile}) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

const ForecastWrapper = styled.main`
  width: calc(100% - 450px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SIZES.inc_1_5};
  gap: ${SIZES.inc_2};

  @media screen and (max-width: ${SIZES.breakpoint.mobile}) {
    width: 100%;
    padding: ${SIZES.default};
  }
  > * {
    max-width: ${SIZES.layout.main.maxWidth};
  }
`;
