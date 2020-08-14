import React, { useContext } from "react";
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
import { BsTrash } from "react-icons/bs";
import img from "../assets/Img/userimg.jpg";
import { Link } from "react-router-dom";
import { SignUpContext } from "./SignUpContext";
import TripCardButton from "./TripCardButton";

const TripCard = ({ trip, key, tripName }) => {
  const logged = useContext(SignUpContext);
  // console.log("from tripCard: " + tripName);
  // console.log("from tripCard: " + trip.tripName);

  return (
    <Card>
      {logged.email === "mahmoud@gmail.com" && (
        <Col xs="2">
          <form>
            <input name="_id" type="text" value={trip._id} hidden />
            <Button color="danger">
              <BsTrash />
            </Button>{" "}
          </form>
        </Col>
      )}
      <CardImg
        top
        width="100%"
        // src="https://cors-anywhere.herokuapp.com/{trip.image}"
        src={img}
        alt=" صورة الرحلة"
      />
      <CardBody>
        <CardTitle id="cardTitle">{trip.name}</CardTitle>
        <CardText>{trip.description}</CardText>
        <CardText className="text-primary">{trip.date}</CardText>
        <Badge color="primary">{trip.price}$</Badge>
        <Col xs="6">
          <Link to="/booking">
            <TripCardButton tripName={tripName} />
            {/* <Button
              color={
                logged.email === "mahmoud@gmail.com" ? "danger" : "warning"
              }
              disabled={logged.email === "mahmoud@gmail.com" ? true : false}
            >
              احجز
            </Button> */}
          </Link>
        </Col>
      </CardBody>
    </Card>
  );
};

export default TripCard;
