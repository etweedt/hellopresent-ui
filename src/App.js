import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./components/home/homeContent";
import toastr from "toastr";
import Auth from "./auth/auth";
import Callback from "./components/loginCallback/callback";
import "toastr/toastr.scss";
import "bootstrap/scss/bootstrap.scss";
import "font-awesome/scss/font-awesome.scss";

toastr.options.positionClass = "toast-bottom-right";

const auth = new Auth();
const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Navbar auth={auth} />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
