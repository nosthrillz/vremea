import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { COLORS } from "../../theme/colors";
import { SIZES } from "../../theme/spacing";
import { LocationContext } from "../../context/locationContext";
import { WeatherContext } from "../../context/weatherContext";
import { getWeather, getLocationList } from "../../utils/api";
import Spinner from "../ui/Spinner";

export default function Locations({ visible, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const inputRef = useRef();
  const [locations, setLocations] = useState([]);
  const locCtx = useContext(LocationContext);
  const wCtx = useContext(WeatherContext);

  useEffect(() => setIsVisible(visible), [visible]);

  const closeHandler = () => {
    setIsVisible(false);
    onClose();
  };

  const searchLocationHandler = async () => {
    setIsLoadingList(true);
    const data = await getLocationList(inputRef.current.value);
    setLocations(data);
    setIsLoadingList(false);
  };

  const selectLocationHandler = async (e) => {
    setIsLoading(true);
    const selectedData = locations[e.target.getAttribute("data-key")];
    const lattlong = selectedData.latt_long.split(", ");

    const payload = {
      lat: lattlong[0],
      long: lattlong[1],
      name: selectedData.title,
      woeid: selectedData.woeid,
    };

    await locCtx.dispatch({
      type: "update",
      payload,
    });

    const newData = await getWeather(payload);
    await wCtx.dispatch({ type: "update", payload: newData });

    setIsLoading(false);
    closeHandler();
  };

  return (
    <Wrapper visible={isVisible}>
      <SearchBar>
        <Input flex={3} placeholder="search location" reference={inputRef} />
        <Button variant="primary" onClick={searchLocationHandler}>
          Search
        </Button>
        <CloseIcon onClick={closeHandler}>+</CloseIcon>
      </SearchBar>
      {!isLoadingList && (
        <List>
          {locations?.map((item, idx) => (
            <ListItem key={idx} onClick={selectLocationHandler} data-key={idx}>
              <p>{item.title}</p>
              <span>&gt;</span>
            </ListItem>
          ))}
        </List>
      )}
      {(isLoading || isLoadingList) && <Spinner />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: ${SIZES.layout.side.width};
  background: ${COLORS.bkg.ui};
  padding: ${SIZES.inc_4} ${SIZES.inc_2};
  position: relative;
  left: ${(props) => (props.visible ? "0px" : `calc(-100% - 10px)`)};
  top: 0;
  transition: left 0.7s cubic-bezier(0, 0.46, 0.21, 1);
  box-shadow: 0 0 10px 3px ${COLORS.bkg.primary};
  display: flex;
  flex-direction: column;
  gap: ${SIZES.inc_2};

  @media screen and (max-width: ${SIZES.breakpoint.mobile}) {
    position: absolute;
    width: 100%;
    min-height: 100vh;
  }
`;

const SearchBar = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    flex: 1;
  }
`;

const CloseIcon = styled.div`
  font-size: 5rem;
  font-weight: 300;
  line-height: 0;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  transition: all 0.5s cubic-bezier(0.71, 0, 0.42, 1);

  &:hover {
    transform: scale(1.5) rotate(45deg);
    cursor: pointer;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ListItem = styled.li`
  padding: ${SIZES.inc_1_25} ${SIZES.default};
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  color: ${COLORS.text.primary};
  position: relative;

  span {
    position: absolute;
    top: 50%;
    right: ${SIZES.default};
    display: none;
    color: ${COLORS.text.secondary};
    font-size: ${SIZES.inc_1_25};
    transform: translateY(-50%);
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${COLORS.text.secondary};

    span {
      display: revert;
    }
  }
`;
