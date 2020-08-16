import React from "react";
import { Container, Table, Button, Row, Col } from "reactstrap";
import { SignUpContext } from "./SignUpContext";
import axios from "axios";
import { BsTrash } from "react-icons/bs";

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

      response: [],
    };

    this.handelSubmit1 = this.handelSubmit1.bind(this);
    this.handelSubmit2 = this.handelSubmit2.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  async componentWillMount() {
    this.setState({ Name: this.context.name });
    this.setState({ email: this.context.email });

    /*
     fetch all trips which that user already book it
    */

    // https://egyptourism-api.herokuapp.com/
    // http://localhost:4000
    try {
      let email = this.context.email;
      console.log(email);
      let result = await axios.post(
        "https://egyptourism-api.herokuapp.com/booking/getClientBooking",
        { email }
      );

      console.log(result.data);
      this.setState({ response: result.data });
    } catch (error) {
      console.log(error);
    }
  }

  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handelSubmit1 = async (event) => {
    event.preventDefault();

    const setIsLoggedIn = this.context.setIsLoggedIn;
    const setEmail = this.context.setEmail;

    try {
      console.log("client email: " + this.state.email);

      let deleteEmail = this.state.email;
      // https://egyptourism-api.herokuapp.com/
      const response = await axios.delete(
        "https://egyptourism-api.herokuapp.com/user/delete",
        {
          deleteEmail,
        }
      );

      console.log(response.data);
      setIsLoggedIn(false);
      setEmail("");
      this.props.history.push("/signup");
    } catch (error) {
      console.log(error);
    }
  };

  handelSubmit2 = async (event) => {
    event.preventDefault();

    let newTrip = {
      image: this.state.image,
      name: this.state.name,
      description: this.state.description,
      date: this.state.date,
      price: this.state.price,
    };

    try {
      let response = await axios.post(
        "https://egyptourism-api.herokuapp.com/travels/addTrip",
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

    this.props.history.push("/trips");
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
                    <Col xs="3">
                      <form onSubmit={this.handelSubmit1}>
                        <input
                          name="email"
                          type="email"
                          value={this.state.email}
                          hidden
                        />
                        <Button type="submit" color="danger">
                          تسجيل الخروج
                        </Button>
                      </form>
                    </Col>
                  </Row>
                </th>
              </tr>
            </tbody>
          </Table>
          {/* the conditional rendering */}
          {this.state.email === "mahmoud@gmail.com" && (
            <div className="form-wrapper">
              <h2>نشر رحلة</h2>
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
                  <label>ادخل وصف الرحلة</label>
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
                <div className="submit">
                  <Button type="submit" color="warning ">
                    إنشر
                  </Button>
                </div>
              </form>
            </div>
          )}

          {this.state.response.map((booking, index) => (
            <div className="tableEdit">
              <Table striped key={booking._id}>
                <thead>
                  <tr>
                    <th>حجز رقم :</th>
                    <th>{index + 1}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">اسم الرحلة :</th>
                    <td>{booking.tripName}</td>
                  </tr>
                  <tr>
                    <th scope="row">عدد افراد هذه الرحلة :</th>
                    <td>{booking.personsNum}</td>
                  </tr>
                  <tr>
                    <th scope="row"> درجة السفر :</th>
                    <td>{booking.travelDegree}</td>
                  </tr>
                  <tr>
                    <Col xs="3">
                      <form>
                        <Button color="danger" disabled={true}>
                          <BsTrash />
                        </Button>{" "}
                      </form>
                    </Col>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default Profile;
