// cONDITIONAL REDENRING

import React from "react";

const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>Invalid Password</h1>;

const Password = (isValid) => {
  return isValid ? <ValidPassword/> : <InValidPassword/>
};

const App = () => {
  return (
    <div>
      <Password isValid={true} />
    </div>
  );
};

export default App;
