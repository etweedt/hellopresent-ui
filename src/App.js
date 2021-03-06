import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home/homeContainer';
import Wishlist from './components/wishlist/wishlistContainer';
import Group from './components/group/groupContainer';
import Shop from './components/shop/shopContainer';
import Claims from './components/claims/claimsContainer';
import Profile from './components/user/userContainer';
import Notifications from './components/notifications/notificationsContainer';
import toastr from 'toastr';
import Auth from './auth/auth';
import NotFound from './components/notFoundPage';
import Loader from './components/common/loader';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'toastr/toastr.scss';

toastr.options.positionClass = 'toast-bottom-right';

const auth = new Auth();
const handleAuthentication = ({location}) => {
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
            <Loader />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mylist" component={Wishlist} />
            <Route exact path="/group" component={Group} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/claims" component={Claims} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/notifications" component={Notifications} />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Loader forceVisible {...props} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
