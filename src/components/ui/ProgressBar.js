// lib
import styled from "styled-components";
// helpers
import { COLORS } from "../../theme/colors";

export default function ProgressBar({ progress = 0 }) {
  return (
    <Wrapper>
      <Values>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </Values>
      <Bar>
        <Progress progress={progress}></Progress>
      </Bar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: min(250px, 100%);
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  isolation: isolate;
`;

const Values = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  font-weight: 600;
  color: ${COLORS.text.secondary};
`;

const Bar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${COLORS.text.primary};
  position: relative;
  color: ${COLORS.text.secondary};
  z-index: 1;

  &:after {
    content: "%";
    position: absolute;
    top: 8px;
    right: 0;
  }
`;

const Progress = styled.div`
  width: ${(props) => (props.progress ? props.progress + "%" : 0)};
  height: 8px;
  border-radius: 4px;
  background: ${COLORS.accent.secondary};
  z-index: 99;
`;
