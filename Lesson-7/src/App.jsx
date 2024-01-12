// CONTEXT API USE CONTEXT HOOK


import React, { useContext } from "react";
import ComponentA from "./components/ComponentA";
import { createContext } from "react";
import ComponentC from "./components/ComponentC";

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = "Ashish";
  const age = 23;
  return (
    <div>
      {/* <ComponentA name={name}/> */}
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default App;

// to solve props drilling useContext hook is used
// 1. import createContext
