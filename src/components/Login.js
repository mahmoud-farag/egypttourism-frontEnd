import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import {} from "react-router-dom";
import { Alert } from "reactstrap";
import { SignUpContext } from "./SignUpContext";

import "../App.css";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Login extends React.Component {
  static contextType = SignUpContext;

  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      userExist: false,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "البريد الإلكتروني غير صالح";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "كلمة المرور يجب ألا تقل عن 8" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const setIsLoggedIn = this.context.setIsLoggedIn;
    const setEmail = this.context.setEmail;
    const setName = this.context.setName;

    if (validateForm(this.state.errors)) {
      console.info("Valid Form");

      try {
        const logingData = {
          email: this.state.email,
          password: this.state.password,
        };
        // https://egyptourism-api.herokuapp.com/
        // http://localhost:4000
        const response = await axios.post(
          "https://egyptourism-api.herokuapp.com/user/login",
          logingData
        );

        setIsLoggedIn(true);
        setEmail(response.data.email);
        setName(response.data.name);
        console.log(response.data.name);

        this.props.history.push("/");
      } catch (error) {
        this.setState({ userExist: true });
        console.log(error);
      }
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>تسجيل الدخول</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">
                <span>البريد الإلكتروني</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            {/* the conditional rendering */}
            {this.state.userExist && (
              <Alert className="alert" color="danger">
                هذا البريد الإلكتروني غير مشترك ! __اشترك الآن
              </Alert>
            )}
            <div className="password">
              <label htmlFor="password">
                <span>كلمة المرور</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">
                <span>
                  <a href="/signup" className="alert-link">
                    اشتراك
                  </a>
                </span>
              </label>
            </div>
            <div className="submit">
              <Button type="submit" variant="warning ">
                تسجيل
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
