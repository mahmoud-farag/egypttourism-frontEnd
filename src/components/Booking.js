import React, { useState, useContext } from "react";
import { SignUpContext } from "./SignUpContext";
import axios from "axios";

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
      let response = await axios.post(
        "http://localhost:4000/booking/addNewBooking",
        newBooking
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setPhone("");
    setPersonsNum(0);
    setTravelDegree(0);
  };
  return (
    <div className="container">
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

        <div>
          <button type="submit"> حجز</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
