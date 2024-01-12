// Custom hook

import React from "react";
import useFetch from "./UseFetch";
const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {data &&
        data.map((items) => {
          return <p key={items.id}>{items.title}</p>;
        })}
    </div>
  );
};

export default App;
