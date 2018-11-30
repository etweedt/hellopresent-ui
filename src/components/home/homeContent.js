import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Alert, Button} from 'reactstrap';

const homeContent = ({auth, profile, groupMembers, wishlist, claims}) => {
  const isAllSet = () => {
    return (
      groupMembers.length > 0 &&
      wishlist.length > 0 &&
      claims.length > 0 &&
      profile.firstName &&
      profile.lastName &&
      profile.address
    );
  };

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
              <p>Hello, {profile.firstName ? profile.firstName : auth.name}!</p>
              {isAllSet() ? (
                <div className="row">
                  <div className="col-sm">
                    <p>
                      Welcome back, looks like you know what you're doing! Here
                      are some quick links for you:
                    </p>
                    <Link to="/shop">
                      <Button className="mb-3" color="primary">
                        Shop
                      </Button>
                    </Link>
                    <br />
                    <Link to="/claims">
                      <Button color="primary">Visit Claims</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-sm">
                    <p>
                      Welcome to Hello, Present! It looks like you have a few
                      things that could use some attention:
                    </p>
                    {(!profile.firstName ||
                      !profile.lastName ||
                      !profile.address) && (
                      <Alert color="warning">
                        <p>
                          Your profile is incomplete, please consider updating
                          it so your friends and family can search for you.
                        </p>
                        <Link to="/profile">
                          <Button color="primary">Profile</Button>
                        </Link>
                      </Alert>
                    )}
                    {groupMembers.length === 0 && (
                      <Alert color="warning">
                        <p>
                          You haven't added anyone to your group, search for
                          some friends and family to get started.
                        </p>
                        <Link to="/group">
                          <Button color="primary">My Group</Button>
                        </Link>
                      </Alert>
                    )}
                    {wishlist.length === 0 && (
                      <Alert color="warning">
                        <p>
                          Your wishlist is empty, head over to My List and add
                          some things so your friends and family know what to
                          get you.
                        </p>
                        <Link to="/mylist">
                          <Button color="primary">My List</Button>
                        </Link>
                      </Alert>
                    )}
                    {claims.length === 0 && (
                      <Alert color="warning">
                        <p>
                          It looks like you haven't claimed any gifts, head over
                          to the Shop and browse. When you pick out a gift for
                          someone, it will appear in your{' '}
                          <Link to="/claims">Claims</Link> page. Things in your
                          claims page cannot be claimed by other members.
                        </p>
                        <Link to="/shop">
                          <Button color="primary">Shop</Button>
                        </Link>
                      </Alert>
                    )}
                  </div>
                </div>
              )}
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
  profile: PropTypes.object.isRequired,
  groupMembers: PropTypes.array.isRequired,
  wishlist: PropTypes.array.isRequired,
  claims: PropTypes.array.isRequired
};

export default withRouter(homeContent);
