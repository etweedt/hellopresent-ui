import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const homeContent = ({auth}) => {
  if (auth.email) {
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
              <p>Welcome {auth.name}! What would you like to do?</p>
              <Link to="/mylist">
                <Button color="primary">
                  Manage My Wishlist
                </Button>
              </Link>
              <br />
              <br />
              <Link to="/shop">
                <Button color="primary">
                  Browse Other Wishlists
                </Button>
              </Link>
              <br />
              <br />
              <p>
                If you don't have your profile set up with at least your first
                name, other people won't be able to see you wishlist.
              </p>
              <Link to="/profile">
                <Button color="primary">
                  Edit profile
                </Button>
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
  auth: PropTypes.object.isRequired
};

export default homeContent;
