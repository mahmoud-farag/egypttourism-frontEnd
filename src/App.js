import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Css/style.css";
import Home from "./components/Home";
import Vr from "./components/Vr";
import Trips from "./components/Trips";
import Booking from "./components/Booking";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/profile";
import {} from "./components/Contact";
import {} from "./components/NoMatch";
import {} from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import { SignUpProvider } from "./components/SignUpContext";

function App() {
  return (
    <React.Fragment>
      <Router>
        <SignUpProvider>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/vr" component={Vr} />
            <Route path="/trips" component={Trips} />
            <Route path="/booking" component={Booking} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route component={Home} />
          </Switch>
        </SignUpProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
