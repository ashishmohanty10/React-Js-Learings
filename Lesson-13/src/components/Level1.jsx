import React from "react";
import { useContext } from "react";
import { AuthContext } from "./Level3";

const Level1 = () => {
  const [authState, setAuthState] = useContext(AuthContext);
  console.log(authState, setAuthState);
  const add = () => {
    setAuthState((prevState) => {
      return { ...prevState, add: 123 };
    });
    // authContext["123"] = 123;
    // console.log(authContext)
  };

  return (
    <div>
      <h3>Level1</h3>
      <button onClick={add}>add to context</button>
      <p>{JSON.stringify(authState, null, 2)}</p>
    </div>
  );
};

export default Level1;
