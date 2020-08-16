import React, { useState, useContext } from "react";
import { SignUpContext } from "./SignUpContext";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Booking = (props) => {
  const [phone, setPhone] = useState("");
  const [personsNum, setPersonsNum] = useState("");
  const [travelDegree, setTravelDegree] = useState("");
  const logged = useContext(SignUpContext);

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      let newBooking = {
        email: logged.email,
        phone,
        personsNum,
        travelDegree,
        tripName: logged.tripName,
      };
      console.log(newBooking);
      // https://egyptourism-api.herokuapp.com/
      // http://localhost:4000
      let response = await axios.post(
        "https://egyptourism-api.herokuapp.com/booking/addNewBooking",
        newBooking
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setPhone("");
    setPersonsNum(0);
    setTravelDegree(0);

   props.history.push('/profile')
  };
  return (
    <div className="bookingBackground ">
      <div className="form-wrapper">
        <h2>إحجز الآن</h2>
        <form onSubmit={handelSubmit}>
          <div>
            <label>ادخل رقم التليفون </label>
            <input
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>ادخل عدد الافراد</label>
            <input
              name="personsNum"
              type="number"
              value={personsNum}
              onChange={(e) => setPersonsNum(e.target.value)}
            />
          </div>
          <div>
            <label>ادخل درجة السفر</label>
            <input
              name="travelDegree"
              type="number"
              value={travelDegree}
              onChange={(e) => setTravelDegree(e.target.value)}
            />
          </div>

          <div className="submit">
            <Button type="submit" variant="warning ">
              إحجز
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
