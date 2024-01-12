// USE REDUCER HOOK

import React from "react";
import { useReducer } from "react";

// state:
// dispatch: allows us to change state value for eg setValue

// reducer: custom state logic
// initial state : containes object

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default App;
