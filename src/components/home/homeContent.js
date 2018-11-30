import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {UncontrolledAlert, Button} from 'reactstrap';

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
              <Link to="/group">
                <Button color="primary">Add People</Button>
              </Link>
              <br />
              <br />
              <Link to="/shop">
                <Button color="primary">Browse Other Wishlists</Button>
              </Link>
            </div>
          </div>
        </div>
        {!profile.firstName ||
          (!profile.lastName ||
            (!profile.address && (
              <div className="row">
                <div className="col-sm">
                  <UncontrolledAlert color="warning" className="text-center">
                    <p>
                      Your profile is incomplete, please consider updating it.
                    </p>
                    <Link to="/profile">
                      <Button color="primary">Edit profile</Button>
                    </Link>
                  </UncontrolledAlert>
                </div>
              </div>
            )))}
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
