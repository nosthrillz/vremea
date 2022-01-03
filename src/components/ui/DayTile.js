import { useState, useContext } from "react";
import styled from "styled-components";
import { UiContext } from "../../context/uiContext";
import { COLORS } from "../../theme/colors";
import useImage from "../../utils/useImage";
import { convertToF } from "../../utils/tempConvert";

export default function DayTile({ day, high, low, weather }) {
  const weatherImg = !!weather ? weather : "weather_clear.png";
  const { image } = useImage(weatherImg);
  const uiCtx = useContext(UiContext);
  const isCelsius = uiCtx.state.isCelsius;
  const units = isCelsius ? "C" : "F";

  return (
    <Wrapper>
      <Text>{day}</Text>
      <img src={image} alt="weather icon" />
      <HighTemp>
        {isCelsius ? high : convertToF(high)}º{units}
      </HighTemp>
      <LowTemp>
        {isCelsius ? low : convertToF(low)}º{units}
      </LowTemp>
    </Wrapper>
  );
}

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: inherit;
  text-align: center;
  font-weight: 500;
`;

const HighTemp = styled(Text)``;

const LowTemp = styled(Text)`
  color: ${COLORS.text.secondary};
`;

const Wrapper = styled.div`
  width: clamp(115px, 100%, 300px);
  background: ${COLORS.bkg.ui};
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: min-content;
  grid-template-areas: "title title" "img img" "high low";
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem 1rem;

  ${Text} {
    grid-area: title;
  }

  img {
    grid-area: img;
    max-height: 62px;
    margin-bottom: 1rem;
  }

  ${HighTemp} {
    grid-area: high;
  }
  ${LowTemp} {
    grid-area: low;
  }
`;
