import Locations from "./components/layout/Locations";
import DailyForecast from "./components/layout/DailyForecast";

import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Locations />
      <ForecastWrapper>
        <DailyForecast currentDay={new Date()} />
      </ForecastWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

const ForecastWrapper = styled.div`
  width: calc(100% - 450px);
  display: flex;
  flex-direction: column;
  align-content: stretch;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
