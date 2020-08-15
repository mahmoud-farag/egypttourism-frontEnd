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
import img from "../assets/Img/trip.jpg";
import { Link } from "react-router-dom";
import { SignUpContext } from "./SignUpContext";
import TripCardButton from "./TripCardButton";
import TripCardDeleteButton from "./TripCardDeleteButton";

const TripCard = ({ trip, tripCardKey, tripName }) => {
  const logged = useContext(SignUpContext);
  // console.log("from tripCard: " + tripName);
  // console.log("from tripCard: " + trip.tripName);

  return (
    <Card>
      {logged.email === "mahmoud@gmail.com" && (
        <Col xs="2">
          {/* <form>
            <input name="_id" type="text" value={tripCardkey} hidden />
            <Button color="danger">
              <BsTrash />
            </Button>
          </form> */}
          <TripCardDeleteButton tripCardKey={tripCardKey} tripName={tripName} />
        </Col>
      )}
      <CardImg
        top
        width="100%"
        // src="https://cors-anywhere.herokuapp.com/{trip.image}"
        // src="https://unsplash.com/photos/HcgK4WoBwzg"
        src={img}
        alt=" صورة الرحلة"
      />
      <CardBody>
      <h2>   <CardTitle id="cardTitle">{trip.name}</CardTitle></h2>
        <CardText>{trip.description}</CardText>
        <h5><CardText className="text-primary">{trip.date}</CardText></h5>
      <h2>  <Badge color="primary">{trip.price}$</Badge></h2>
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
