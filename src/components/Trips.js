import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
import {
  Container,
  Card,
  Row,
  Col,
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
import { SignUpContext } from "./SignUpContext";
import axios from "axios";
import data from "../assets/data/tripData";
import img from "../assets/Img/userimg.jpg";
import { Link } from "react-router-dom";

import TripCard from "./TripCard";

class Trips extends Component {
  static contextType = SignUpContext;

  constructor(props) {
    super(props);
    this.state = {
      response: [],
      _id: "",
    };

    // this.pickTripTitle = this.pickTripTitle.bind(this);
  }

  async componentWillMount() {
    try {
      // https://egyptourism-api.herokuapp.com/
      var result = await axios.get("http://localhost:4000/travels/getTrips");
      this.setState({ response: result.data });
      console.log(this.state.response);
    } catch (error) {
      console.log(error);
    }
  }

  // pickTripTitle() {
  //   const setTripName = this.context.setTripName;
  //   setTripName(document.getElementById("cardTitle").textContent);
  // }

  render() {
    const email = this.context.email;

    return (
      <div className="tripsBackground">
        <Container>
          <Row xs="3">
            {this.state.response.map((trip, index) => (
              <div className="tripsCard">
                <TripCard trip={trip} key={trip._id} tripName={trip.name} />
              </div>

              /*<div className="tripsCard">
               <Card key={index}>
                  <Col xs="2">
                    <form>
                      <input name="_id" type="text" value={trip._id} hidden />
                      <Button color="danger">
                        <BsTrash />
                      </Button>{" "}
                    </form>
                  </Col>
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
                        <Button
                          color={
                            email === "mahmoud@gmail.com" ? "danger" : "warning"
                          }
                          onClick={this.pickTripTitle}
                          disabled={
                            email === "mahmoud@gmail.com" ? true : false
                          }
                        >
                          احجز
                        </Button>
                      </Link>
                    </Col>
                  </CardBody>
                </Card> 
              </div>*/
            ))}
          </Row>
        </Container>
        <div className="tripsLayout"></div>
      </div>
    );
  }
}

export default Trips;
