import React, { createContext, useReducer } from "react";

export const LocationContext = createContext();

const initialState = {
  long: 0,
  lat: 0,
  name: "",
  woeid: "",
};

const locationReducer = (state, action) => {
  if (action.type === "update") return action.payload;
  if (action.type === "reset") return initialState;
};

export function LocationProvider({ children }) {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationContext.Provider>
  );
}
