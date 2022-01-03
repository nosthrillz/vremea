import styled, { keyframes } from "styled-components";

export default function Spinner() {
  return (
    <Wrapper>
      <SpinnerAnimated></SpinnerAnimated>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const spinnerAnim = keyframes`
to{transform: rotate(.5turn)};
`;

const SpinnerAnimated = styled.div`
  width: 60px;
  height: 60px;
  --c: radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: ${spinnerAnim} 1s infinite;
`;
