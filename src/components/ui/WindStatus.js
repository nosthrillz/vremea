import styled from "styled-components";
import { SIZES } from "../../theme/spacing";
import IconDirection from "../../images/icon_direction.svg";
import { COLORS } from "../../theme/colors";

export default function WindStatus({ direction = "", compass = "" }) {
  return (
    <Wrapper>
      <ImageWrapper direction={direction}>
        <img src={IconDirection} alt="wind direction" />
      </ImageWrapper>
      <p>{compass}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${SIZES.default};
  font-size: ${SIZES.inc_1_25};
`;

const baseRotate = 315;

const ImageWrapper = styled.div`
  transform: rotate(${baseRotate + "deg"});
  background: ${COLORS.accent.neutral};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  padding: 5px;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    transform: ${(props) => `rotate(${baseRotate + props.direction + "deg"})`};
  }
`;
