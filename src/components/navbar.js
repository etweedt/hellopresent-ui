import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Badge
} from 'reactstrap';
import {NavLink as Link, withRouter} from 'react-router-dom';
import * as authActions from '../actions/authActions';
import * as notificationActions from '../actions/notificationActions';

export class navbarContainer extends React.Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    authInfo: PropTypes.object,
    notifications: PropTypes.array.isRequired,
    getNotifications: PropTypes.func.isRequired
  };

  state = {
    navbarIsOpen: false
  };

  componentWillMount() {
    const {auth, authInfo, getUserInfo, getNotifications} = this.props;

    if (auth.isAuthenticated()) {
      getUserInfo();
    }

    if (authInfo.email) {
      getNotifications(authInfo.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {authInfo, getNotifications} = this.props;

    if (
      nextProps.authInfo.email &&
      nextProps.authInfo.email !== authInfo.email
    ) {
      getNotifications(nextProps.authInfo.email);
    }
  }

  navbarClose = () => {
    this.setState({
      navbarIsOpen: false
    });
  };

  navbarToggle = () => {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  };

  render() {
    const {auth, authInfo, notifications} = this.props;
    const {navbarIsOpen} = this.state;

    function notificationsCount() {
      let count = 0;
      notifications.forEach(n => {
        if (!n.seen) {
          count++;
        }
      });

      return count;
    }

    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand tag={Link} to="/" onClick={this.navbarClose}>
          Hello, Present!
        </NavbarBrand>
        <NavbarToggler onClick={this.navbarToggle} />
        <Collapse isOpen={navbarIsOpen} navbar>
          {auth.isAuthenticated() ? (
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/mylist" onClick={this.navbarClose}>
                  My List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/shop" onClick={this.navbarClose}>
                  Shop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/claims" onClick={this.navbarClose}>
                  Claims
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/group" onClick={this.navbarClose}>
                  My Group
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/profile" onClick={this.navbarClose}>
                  My Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/notifications"
                  onClick={this.navbarClose}>
                  Notifications{' '}
                  {notificationsCount() > 0 && (
                    <Badge color="danger">{notificationsCount()}</Badge>
                  )}
                </NavLink>
              </NavItem>
            </Nav>
          ) : null}
          <div className="dropdown-divider d-md-none" />
        </Collapse>
        <Collapse isOpen={navbarIsOpen} navbar>
          {auth.isAuthenticated() ? (
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink className="active">{authInfo.email}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    auth.logout();
                    this.navbarClose();
                  }}
                  className="clickable">
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink
                  onClick={() => {
                    auth.login();
                    this.navbarClose();
                  }}
                  className="clickable">
                  Log In
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    );
  }
}

export const mapStateToProps = state => {
  return {
    authInfo: state.auth,
    notifications: state.notifications
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => {
      dispatch(authActions.retrieveAuthProfile());
    },
    getNotifications: userId => {
      dispatch(notificationActions.getNotifications(userId));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(navbarContainer)
);
