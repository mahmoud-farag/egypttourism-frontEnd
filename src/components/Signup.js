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

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      confirmPassword: null ,
      errors: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            ? ' يجب أن يكون الاسم باللغة الإنجيليزية وعلى الأقل خمسة أحرف'
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
        case 'confirmPassword': 
        errors.confirmPassword = 
          value.length < 8
            ? 'يجب أن تتطابق مع كلمة المرور'
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
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
        alert("لم تتطابق كلمة المرور");
    } else {
        // make API call
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>اشتراك</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName"><span>الاسم كامل</span></label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email"><span>البريد الإلكتروني</span></label>
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

            <div className='password'>
              <label htmlFor="password"><span>تأكيد كلمة المرور</span></label>
              <input type='password' name='confirmPassword' onChange={this.handleChange} noValidate />
              {errors.confirmPassword.length > 0 && 
                <span className='error'>{errors.confirmPassword}</span>}
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