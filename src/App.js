import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Css/style.css";
import Home from "./components/Home";
import Trips from "./components/Trips";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
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
            <Route path="/trips" component={Trips} />
            <Route path="/booking" component={Booking} />
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
