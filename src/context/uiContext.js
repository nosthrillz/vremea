// lib
import { createContext, useReducer } from "react";

export const UiContext = createContext();

const initialState = {
  isCelsius: true,
  isFahrenheit: false,
};

const uiReducer = (state) => {
  return { isCelsius: !state.isCelsius, isFahrenheit: !state.isFahrenheit };
};

export function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
}
