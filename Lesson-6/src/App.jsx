// USE EFFECT HOOK

import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
const App = () => {
  const [value, setValue] = useState(0);

  // Render for the (first time)
  // Anytime we do (side effect)
  // We cannot put useEffect inside a consitional statement
  // dependency list

  // useEffect(() => {
  //   console.log("hello");
  //   document.title = `Increament ${value}`;
  // },[]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setValue(res.data);
    });
  });

  return (
    <div>
      {/* <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button> */}

      {value.map((items) => {
        <ul key={Math.random()}>
          <li>{items.title}</li>
        </ul>;
      })}
    </div>
  );
};

export default App;
