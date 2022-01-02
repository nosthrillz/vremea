import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import { COLORS } from "../../theme/colors";

export default function Locations() {
  return (
    <Wrapper>
      <SearchBar>
        <Input flex={3} placeholder="search location" />
        <button>Search</button>
      </SearchBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 450px;
  background: ${COLORS.bkg.ui};
  padding: 3.5rem 2rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const SearchBar = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    flex: 1;
  }
`;
