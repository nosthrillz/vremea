// components
import ProgressBar from "./ProgressBar";
import WindStatus from "./WindStatus";
// lib
import styled from "styled-components";
// helpers
import { COLORS } from "../../theme/colors";
import { SIZES } from "../../theme/spacing";

export default function InfoCard({
  type,
  text,
  value,
  unit,
  direction,
  compass,
}) {
  return (
    <Wrapper>
      <Title>{text}</Title>
      <Number>
        {value}
        <span> {unit}</span>
      </Number>
      {type === "humidity" && <ProgressBar progress={value} />}
      {type === "wind" && (
        <WindStatus direction={direction} compass={compass} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: clamp(300px, 100%, 600px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.bkg.ui};
  padding: ${SIZES.inc_1_5};
  gap: ${SIZES.default};
`;

const Title = styled.p`
  font-size: ${SIZES.inc_1_25};
`;

const Number = styled.h2`
  font-size: calc(${SIZES.inc_4} + 0.5rem);

  span {
    font-size: ${SIZES.inc_2};
    font-weight: 400;
  }
`;
