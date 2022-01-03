// lib
import styled from "styled-components";
// helpers
import { COLORS } from "../../theme/colors";
import { SIZES } from "../../theme/spacing";

const BTN_TYPES = {
  primary: {
    bkg: COLORS.accent.primary,
    hover: COLORS.text.secondary,
    text: COLORS.text.primary,
  },
  secondary: {
    bkg: COLORS.accent.neutral,
    hover: COLORS.text.secondary,
    text: COLORS.text.primary,
  },
};

export default function Button({ children, rounded, variant, onClick }) {
  return (
    <Btn variant={variant} rounded={rounded} onClick={onClick}>
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  all: unset;
  background: ${(props) => BTN_TYPES[props.variant].bkg};
  color: ${(props) => BTN_TYPES[props.variant].text};
  padding: ${SIZES.default};

  border-radius: ${(props) => (props.rounded ? "50%" : 0)};

  width: ${(props) => (props.rounded ? SIZES.default : "auto")};
  height: ${(props) => (props.rounded ? SIZES.default : "auto")};
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
