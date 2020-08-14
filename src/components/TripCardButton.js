import React, { useContext } from "react";
import { SignUpContext } from "./SignUpContext";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Badge,
  Form,
  Label,
  Input,
} from "reactstrap";

const TripCardButton = ({ tripName }) => {
  const logged = useContext(SignUpContext);

  const pickTripTitle = () => {
    // const setTripName = this.context.setTripName;
    // setTripName(document.getElementById("cardTitle").textContent);
    logged.setTripName(tripName);
  };
  return (
    <Button
      color={logged.email === "mahmoud@gmail.com" ? "danger" : "warning"}
      disabled={logged.email === "mahmoud@gmail.com" ? true : false}
      onClick={pickTripTitle}
    >
      احجز
    </Button>
  );
};

export default TripCardButton;
