import React from 'react';
import { Button} from 'react-bootstrap' ;
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'البريد الإلكتروني غير صالح';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'كلمة المرور يجب ألا تقل عن 8'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }

  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>تسجيل الدخول</h2>
          <form onSubmit={this.handleSubmit} noValidate>
           
            <div className='email'>
              <label htmlFor="email" ><span>البريد الإلكتروني</span></label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password"><span>كلمة المرور</span></label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
            <Button   variant="warning " >تسجيل</Button>{' '}
            </div>
          </form>
        </div>
        </div>
      
    );
  }
}