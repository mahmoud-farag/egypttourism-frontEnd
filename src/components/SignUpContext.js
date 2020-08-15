import React, { useState, createContext } from "react";

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
  /*
   those are the global states which I need it to be shared and all other component 
   be able to use it and set it's values
  */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tripName, setTripName] = useState("");
  const [trips, setTrips] = useState([]);

  var logged = {
    isLoggedIn,
    setIsLoggedIn,
    email,
    setEmail,
    name,
    setName,
    tripName,
    setTripName,
    trips,
    setTrips,
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
