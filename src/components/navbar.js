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
  NavbarToggler
} from 'reactstrap';
import {NavLink as Link, withRouter} from 'react-router-dom';
import * as authActions from '../actions/authActions';

export class navbarContainer extends React.Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    authInfo: PropTypes.object
  };

  state = {
    navbarIsOpen: false
  };

  componentWillMount() {
    const {auth, getUserInfo} = this.props;

    if (auth.isAuthenticated()) {
      getUserInfo();
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
    const {auth, authInfo} = this.props;
    const {navbarIsOpen} = this.state;

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
              {/* <NavItem>
                <NavLink tag={Link} to="/shop" onClick={this.navbarClose}>
                  Shop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/claims" onClick={this.navbarClose}>
                  Claims
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink tag={Link} to="/profile" onClick={this.navbarClose}>
                  Profile
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
    authInfo: state.auth
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => {
      dispatch(authActions.retrieveAuthProfile());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(navbarContainer)
);
