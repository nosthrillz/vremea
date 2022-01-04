// lib
import { createContext, useReducer } from "react";

export const UiContext = createContext();

const initialState = {
  isCelsius: true,
  isFahrenheit: false,
  onboarding: true,
};

const uiReducer = (state, action) => {
  if (action.type === "toggleUnits")
    return {
      isCelsius: !state.isCelsius,
      isFahrenheit: !state.isFahrenheit,
      onboarding: state.onboarding,
    };
  if (action.type === "disableOnboarding")
    return {
      isCelsius: state.isCelsius,
      isFahrenheit: state.isFahrenheit,
      onboarding: false,
    };
};

export function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
}
