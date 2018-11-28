import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Alert, Button} from 'reactstrap';

const homeContent = ({auth, profile}) => {
  if (auth.email) {
    return (
      <section>
        <div className="row">
          <div className="col-sm">
            <h1>
              <i className="fa fa-home" /> Home
            </h1>
          </div>
        </div>
        {!profile.firstName && (
          <div className="row">
            <div className="col-sm">
              <Alert color="warning" className="text-center">
                <p>
                  Your profile is incomplete and your wish list will not be
                  available for others to see until you add your name.
                </p>
                <Link to="/profile">
                  <Button color="primary">Edit profile</Button>
                </Link>
              </Alert>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-sm">
            <div className="jumbotron text-center">
              <p>
                Welcome, {profile.firstName ? profile.firstName : auth.name}!
                What would you like to do?
              </p>
              <Link to="/mylist">
                <Button color="primary">Manage My Wishlist</Button>
              </Link>
              <br />
              <br />
              <Link to="/shop">
                <Button color="primary">Browse Other Wishlists</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="row">
          <div className="col-sm">
            <h1>
              <i className="fa fa-home" /> Wishlist
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="jumbotron text-center">
              <p>Welcome! Please login or register to manage your list.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

homeContent.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default withRouter(homeContent);
