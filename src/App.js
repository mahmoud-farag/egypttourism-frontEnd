import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/Css/style.css';
import  Home from './components/Home';
import  Vr  from './components/Vr';
import  Trips  from './components/Trips';
import  Booking  from './components/Booking';
import  About  from './components/About';
import  Login   from './components/Login';
import  Signup  from './components/Signup';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import  NavigationBar  from './components/NavigationBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
         
         
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/vr" component={Vr} />
              <Route path="/trips" component={Trips} />
              <Route path="/booking" component={Booking} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route component={Home} />
            </Switch>
          
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
