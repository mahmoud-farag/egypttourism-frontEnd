import React, { useState, useContext } from "react";
import { Button } from "reactstrap";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

import { SignUpContext } from "./SignUpContext";

const TripCardDeleteButton = ({ tripCardKey, tripName }) => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState({});
  const logged = useContext(SignUpContext);

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      //   setName(tripName);

      console.log("tripCardKey:" + tripCardKey); // tripCardKey: 5f37fe1f7fc62417685461cb

      //the delete axios request on handelSubmit
       // https://egyptourism-api.herokuapp.com/
        // http://localhost:4000
      let result = await axios.delete(
        "https://egyptourism-api.herokuapp.com/travels/deleteTrip",
        {
          headers: {
            Authorization: "authorizationToken",
          },
          data: {
            _id: tripCardKey,
          },
        }
      );
      /*
       if the trip was deleted , then get all new trips again
      */
      if (result) {
        try {
          // https://egyptourism-api.herokuapp.com/
        // http://localhost:4000
          var response = await axios.get(
            "https://egyptourism-api.herokuapp.com/travels/getTrips"
          );
          logged.setTrips(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      console.log(result.data);
      setResponse(result.data);
      //re-render the trips page after the trip was deleted
    } catch (error) {
      console.log(error);
    }
  };

  //the delete button component
  return (
    <form onSubmit={handelSubmit}>
      <input name="_id" type="text" value={tripCardKey} hidden />
      <Button type="submit" color="danger">
        <BsTrash />
      </Button>
    </form>
  );
};

export default TripCardDeleteButton;
