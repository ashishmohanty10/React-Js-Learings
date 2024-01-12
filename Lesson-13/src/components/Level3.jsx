import React from "react";
import { createContext, useState } from "react";
import Level2 from "./Level2";
export const AuthContext = createContext(); // context is created
const authStateInitial = { userId: 123, loggedIn: true }; //data we need to pass

const Level3 = () => {
    const [authState,setAuthState] = useState(authStateInitial);

  return (
    <>
      <h1>Level3</h1>
      <AuthContext.Provider value={[authState,setAuthState]}> 
        <div>
          <Level2 />
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default Level3;

