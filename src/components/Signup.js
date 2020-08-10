import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Alert } from 'reactstrap';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      confirmPassword: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? " يجب أن يكون الاسم باللغة الإنجيليزية وعلى الأقل خمسة أحرف"
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
      case "confirmPassword":
        errors.confirmPassword =
          value.length < 8 ? "يجب أن تتطابق مع كلمة المرور" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
      alert("لم تتطابق كلمة المرور");
    } else {
      // make API call

      const newUser = {
        name: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
      };
      console.log(newUser);

      try {
        // http://localhost:4000/signUp
        const response = await axios.post(
          "http://localhost:4000/user/signUp",
          newUser
        );
        console.log(response);

        this.setState({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        //redirect to the home page
        this.props.history.push("/");
      } catch (error) {
        console.log(error.response.data.message);
        // const response = error.response;
        // console.log(response.data.errors);
      }
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>اشتراك</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">
                <span>الاسم كامل</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className='email'>
              <label htmlFor="email"><span>البريد الإلكتروني</span></label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
                 <Alert color="danger">
        هذا البريد الإلكتروني مشترك بالفعل ! __سجل الدخول
      </Alert>
            </div>
            <div className="password">
              <label htmlFor="password">
                <span>كلمة المرور</span>
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className='password'>
              <label htmlFor="password"><span>تأكيد كلمة المرور</span></label>
              <input type='password' name='confirmPassword' onChange={this.handleChange} noValidate />
              {errors.confirmPassword.length > 0 && 
                <span className='error'>{errors.confirmPassword}</span>}
            </div> 
            <div className='email'>
            <label htmlFor="email" ><span><a href="/login"  className="alert-link">تسجيل الدخول</a></span></label>
            </div>
            <div className='submit'>
            <Button   variant="warning " >اشتراك</Button>{' '}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
