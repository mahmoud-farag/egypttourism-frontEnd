import React, { useState, createContext } from "react";

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  var logged = {
    isLoggedIn,
    setIsLoggedIn,
    email, 
    setEmail
  };
  //   function isLoggedIn(bool = false) {
  //     return bool;
  //   }

  return (
    <SignUpContext.Provider value={logged}>
      {props.children}
    </SignUpContext.Provider>
  );
};
