import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
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
import { SignUpContext } from "./SignUpContext";
import axios from "axios";
import data from "../assets/data/tripData";

class Trips extends Component {
  static contextType = SignUpContext;

  constructor(props) {
    super(props);
    this.state = {
      response: [],
      _id: "",
    };
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
  render() {
    // const email = this.context.email;
    return (
      <div className="tripsBackground">
        <Container>
          <Row xs="3">
            {this.state.response.map((trip, index) => (
              <div className="tripsCard" key={trip._id}>
                <Card>
                  <Col xs="2">
                    <form
                      action="http://localhost:4000/travels/deleteTrip"
                      method="delete"
                    >
                      <input name="_id" type="text" value={trip._id} hidden />
                      <Button color="danger">
                        <BsTrash />
                      </Button>{" "}
                    </form>
                  </Col>
                  <CardImg
                    top
                    width="100%"
                    src="https://cors-anywhere.herokuapp.com/{trip.image}"
                    alt=" صورة الرحلة"
                  />
                  <CardBody>
                    <CardTitle>{trip.name}</CardTitle>
                    <CardText>{trip.description}</CardText>
                    <CardText className="text-primary">{trip.date}</CardText>
                    <Badge color="primary">{trip.price}$</Badge>
                    <Col xs="6">
                      {" "}
                      <Button color="warning">احجز</Button>{" "}
                    </Col>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
        <div className="tripsLayout"></div>
      </div>
    );
  }
}

export default Trips;
