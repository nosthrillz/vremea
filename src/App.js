// components
import Locations from "./components/layout/Locations";
import TodayForecast from "./components/layout/TodayForecast";
import DayTileList from "./components/layout/DayTileList";
import DailyHighlights from "./components/layout/DailyHighlights";
import UnitSwitcher from "./components/ui/UnitSwitcher";
// lib
import styled from "styled-components";
import { useState, useContext } from "react";
// helpers
import { SIZES } from "./theme/spacing";
import { UiContext } from "./context/uiContext";
import { COLORS } from "./theme/colors";
import useString from "./utils/useString";

function App() {
  const [showLocations, setShowLocations] = useState(false);
  const uiCtx = useContext(UiContext);
  const t = useString();

  return (
    <Wrapper>
      <TodayForecast onSearch={() => setShowLocations(true)} />
      <Locations
        visible={showLocations}
        onClose={() => setShowLocations(false)}
      />
      <ForecastWrapper>
        {uiCtx.state.onboarding ? (
          <div>
            <OnboardingText>{t("main.welcome")}</OnboardingText>
          </div>
        ) : (
          <>
            <UnitSwitcher />
            <DayTileList currentDay={new Date()} />
            <DailyHighlights />
          </>
        )}
        <Footer>
          <a href="https://github.com/nosthrillz">NoSThrillZ</a> -{" "}
          <a href="https://devchallenges.io">devChallenges.io</a>
        </Footer>
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
  height: 100%;
  width: calc(100% - 450px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SIZES.inc_1_5};
  gap: ${SIZES.inc_2};
  overflow: auto;

  @media screen and (max-width: ${SIZES.breakpoint.mobile}) {
    width: 100%;
    padding: ${SIZES.default};
    overflow: unset;
  }

  > * {
    max-width: ${SIZES.layout.main.maxWidth};
  }
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  position: relative;
  bottom: 0;
  padding-bottom: ${SIZES.default};
  margin-top: ${SIZES.inc_3};

  @media screen and (max-width: ${SIZES.breakpoint.tablet}) {
    margin: 0;
  }
`;

const OnboardingText = styled.h1`
  text-align: center;
  margin-top: ${SIZES.inc_4};
  font-size: ${SIZES.inc_2};

  strong {
    color: ${COLORS.accent.primary};
  }
`;
