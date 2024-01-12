// USE STATE & FORMS IN REACT JS

import React from "react";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDeafault();
    alert(`Is this ${userName}`);
    setUserName("");
  };

  return (
    <div>
      <h1>Demo form</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleInput} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
