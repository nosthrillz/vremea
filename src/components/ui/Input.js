// lib
import styled from "styled-components";
// helpers
import { COLORS } from "../../theme/colors";
// assets
import IconSearch from "../../images/icon_search.svg";

export default function Input({ flex, placeholder, reference }) {
  return (
    <Wrapper flex={flex}>
      <SearchIcon src={IconSearch} alt="search" />
      <InputElement placeholder={placeholder} ref={reference} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: ${(props) => props.flex};
  display: flex;
  position: relative;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
  font-size: 2rem;
  color: ${COLORS.text.secondary};
`;

const InputElement = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 3rem;
  background: transparent;
  border: 1px solid ${COLORS.text.secondary};
  font-family: inherit;
  letter-spacing: 0.1ch;
  color: ${COLORS.text.primary};
  font-size: inherit;

  &::placeholder {
    color: ${COLORS.text.secondary};
  }
`;
