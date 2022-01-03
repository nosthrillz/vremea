// lib
import styled from "styled-components";
// helpers
import { COLORS } from "../../theme/colors";
import { SIZES } from "../../theme/spacing";

const BTN_TYPES = {
  primary: {
    bkg: COLORS.bkg.ui,
    bkg2: COLORS.bkg.primary,
    hover: COLORS.text.primary,
    text: COLORS.text.primary,
  },
  secondary: {
    bkg: COLORS.accent.neutral,
    hover: COLORS.text.secondary,
    text: COLORS.text.primary,
  },
};

export default function CircleButton({ children, variant, onClick, isActive }) {
  return (
    <Btn
      variant={variant}
      isActive={isActive}
      onClick={onClick}
      nodeType={children}
    >
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  all: unset;
  background: ${(props) =>
    props.isActive
      ? BTN_TYPES[props.variant].hover
      : BTN_TYPES[props.variant].bkg};
  color: ${(props) =>
    props.isActive
      ? BTN_TYPES[props.variant].bkg2
      : BTN_TYPES[props.variant].text};
  border-radius: 50%;
  font-weight: 700;

  width: ${SIZES.inc_3};
  height: ${SIZES.inc_3};
  display: grid;
  place-items: center;

  img {
    width: 50%;
    height: 50%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
