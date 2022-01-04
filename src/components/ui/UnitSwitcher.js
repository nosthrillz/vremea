// components
import CircleButton from "./CircleButton";
// lib
import { useContext } from "react";
import styled from "styled-components";
// helpers
import { UiContext } from "../../context/uiContext";
import { SIZES } from "../../theme/spacing";

export default function UnitSwitcher() {
  const uiCtx = useContext(UiContext);

  return (
    <Wrapper>
      <Buttons>
        <CircleButton
          variant="primary"
          isActive={uiCtx.state.isCelsius}
          onClick={() => uiCtx.dispatch({ type: "toggleUnits" })}
        >
          ºC
        </CircleButton>
        <CircleButton
          variant="primary"
          isActive={uiCtx.state.isFahrenheit}
          onClick={() => uiCtx.dispatch({ type: "toggleUnits" })}
        >
          ºF
        </CircleButton>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${SIZES.default};
`;
