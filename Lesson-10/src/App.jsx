import React from "react";
import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);
  const focusInput = ()=>{
    inputElement.current.focus();
    inputElement.current.value = "Ashish"
  }


  return <div>
    <input type="text"  ref={inputElement}/>
    <button onClick={()=>focusInput()}>Write whats in the input tag</button>
  </div>;
};

export default App;
