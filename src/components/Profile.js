import React, { useState, useEffect, useContext } from "react";
import { Container, Table, Button, Row, Col } from "reactstrap";
import { SignUpContext } from "./SignUpContext";
import axios from "axios";

class Profile extends React.Component {
  static contextType = SignUpContext;

  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",

      image: "",
      name: "",
      description: "",
      date: "",
      price: 0,
    };

    this.handelSubmit1 = this.handelSubmit1.bind(this);
    this.handelSubmit2 = this.handelSubmit2.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  componentWillMount() {
    // const data = JSON.parse(localStorage.getItem("user"));
    // console.log(data);
    this.setState({ Name: this.context.name });
    this.setState({ email: this.context.email });
    // setName(data.name || "default");
    // setEmail(data.email || "default");
  }

  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handelSubmit1 = async (event) => {
    // event.preventDefault();
    try {
      console.log("client email: " + this.state.email);

      let deleteEmail = this.state.email;
      const response = await axios.delete("http://localhost:4000/user/delete", {
        deleteEmail,
      });

      console.log(response.data);
      // logged.setIsLoggedIn(false);
      this.props.history.push("/signup");
    } catch (error) {
      console.log(error);
    }
  };

  handelSubmit2 = async (event) => {
    event.preventDefault();

    // alert(`${this.state.tripImage} : ${this.state.tripName} : ${this.state.tripDescription} : ${this.state.tripDate} :

    //    : ${this.state.tripPrice}`);
    let newTrip = {
      image: this.state.image,
      name: this.state.name,
      description: this.state.description,
      date: this.state.date,
      price: this.state.price,
    };

    try {
      let response = await axios.post(
        "http://localhost:4000/travels/addTrip",
        newTrip
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    this.setState({
      image: "",
      name: "",
      description: "",
      date: "",
      price: "",
    });
  };

  render() {
    return (
      <div className="userBackground">
        <Container className="themed-container userEdit">
          <Table dark className="userEditTable">
            <thead>
              <tr>
                <th>الإسم الكامل :</th>
                <th>{this.state.Name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">البريد الإلكتروني :</th>
                <td>{this.state.email}</td>
              </tr>
              {/* <tr>
                <th scope="row">كلمة المرور :</th>
                <td></td>
              </tr> */}
              <tr>
                <th scope="row">
                  <Row>
                    <Col xs="2">
                      <form onSubmit={this.handelSubmit1}>
                        <input
                          name="email"
                          type="email"
                          value={this.state.email}
                          hidden
                        />
                        <Button type="submit" color="danger">
                          تسجيل الخروج
                        </Button>{" "}
                      </form>
                    </Col>
                  </Row>
                </th>
              </tr>
            </tbody>
          </Table>
          {/* the conditional rendering */}
          {this.state.email === "mahmoud@gmail.com" && (
            <div className="tripsCard">
              <form onSubmit={this.handelSubmit2}>
                <div>
                  <label>ادخل لينك الصورة</label>
                  <input
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={this.handelChange}
                  />
                </div>

                <div>
                  <label>ادخل عنوان الرحلة </label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handelChange}
                  />
                </div>

                <div>
                  <label>ادخل نبذة مختصرة عن الرحلة</label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handelChange}
                  />
                </div>

                <div>
                  <label>ادخل تاريخ الرحلة </label>
                  <input
                    type="text"
                    name="date"
                    value={this.state.date}
                    onChange={this.handelChange}
                  />
                </div>

                <div>
                  <label>ادخل سعر الرحلة </label>
                  <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handelChange}
                  />
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Profile;
