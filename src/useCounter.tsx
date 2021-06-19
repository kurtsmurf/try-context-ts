import { useReducer } from "preact/hooks";

export const useCounter = () => {
  const reducer = (
    state: number,
    action: "increment" | "decrement" | "reset",
  ) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
    }
  };
  const initialState = 0;

  return useReducer(reducer, initialState);
};
